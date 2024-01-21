import asyncio
from documents import Patient, SensorData
import random
import numpy as np
import tensorflow as tf
import pdb

class PatientRoutine:
    def __init__(self, patient: Patient, path: list, norm_ecgs, mi_ecgs, model, sleep_period_sec: int = 5):
        self.patient = patient
        self.path = path
        self.room = path[0]
        self.path_index = 0
        self.path_index_increment = 1
        self.norm_ecg_index = 0
        self.norm_ecgs = norm_ecgs
        self.mi_ecg_index = 0
        self.mi_ecgs = mi_ecgs
        self.is_ecg_normal = True
        self.is_heart_attack = False
        self.model = model
        self.sleep_period_sec = sleep_period_sec
        self.first_routine_executed = False
        self.ecg = []

    async def routine(self):
        while True:
            print(f"Sending update for patient {self.patient.document_id}")
            await asyncio.sleep(self.sleep_period_sec)
            await self.__do_routine()

    async def __do_routine(self):
        if not self.first_routine_executed:
            self.patient.send_update(full_update=True)
            self.first_routine_executed = True
        else:
            # The model is more sensitive to heart attacks than we want it to be...
            is_heart_attack = await self.__check_for_mi()
            if (is_heart_attack) and self.is_ecg_normal:
                self.is_heart_attack = False
            elif is_heart_attack:
                self.is_heart_attack = True
            else:
                self.is_heart_attack = False

            self.patient.update(sensor_data=await self.__get_updated_sensor_data())
            self.patient.send_update(full_update=False)

    async def __get_updated_sensor_data(self):
        return SensorData(
            ecg=await self.__get_updated_ecg(),
            location=await self.__get_updated_location(),
            is_having_heart_attack=self.is_heart_attack
        )

    async def __get_updated_ecg(self):
        if self.is_ecg_normal:
            self.ecg = self.norm_ecgs[self.norm_ecg_index].squeeze().tolist()
            self.norm_ecg_index += 1
            if self.norm_ecg_index >= self.norm_ecgs.shape[0]:
                self.norm_ecg_index = 0
        else:
            self.ecg = self.mi_ecgs[self.mi_ecg_index].squeeze().tolist()
            self.mi_ecg_index += 1
            if self.mi_ecg_index >= self.mi_ecgs.shape[0]:
                self.mi_ecg_index = 0
        return self.ecg

    async def __get_updated_location(self):
        if not self.is_heart_attack:
            self.room = self.path[self.path_index]
            self.path_index += self.path_index_increment
            if self.path_index >= len(self.path) - 1:
                self.path_index_increment = -1
            elif self.path_index <= 0:
                self.path_index_increment = 1
        return self.room

    async def __check_for_mi(self):
        if len(self.ecg) == 0:
            return False
        ecg = np.array(self.ecg).reshape(1, 1000, 1)
        prediction = self.model.predict(ecg)
        print(prediction)
        return prediction[0][0] > 0.5

    def toggle_ecg(self):
        self.is_ecg_normal = not self.is_ecg_normal


class Simulator:
    NUM_ECGS_PER_PATIENT = 5

    def __init__(self, patients: list, ecg_path: str, model_path: str):
        self.routines = []

        ecg_data = np.load(ecg_path)
        normal_ecgs = ecg_data["ecgs"][(ecg_data["labels"] == 0).squeeze()]
        mi_ecgs = ecg_data["ecgs"][(ecg_data["labels"] == 1).squeeze()]
        model = tf.keras.models.load_model(model_path)

        for idx, p in enumerate(patients):
            patient, path = p
            patient_normal_ecgs = normal_ecgs[idx * self.NUM_ECGS_PER_PATIENT: (idx + 1) * self.NUM_ECGS_PER_PATIENT]
            patient_mi_ecgs = mi_ecgs[idx * self.NUM_ECGS_PER_PATIENT: (idx + 1) * self.NUM_ECGS_PER_PATIENT]
            self.routines.append(PatientRoutine(patient, path, patient_normal_ecgs, patient_mi_ecgs, model))

    def start(self):
        asyncio.run(self.__start())

    def toggle_ecg(self, patient_id: str):
        for routine in self.routines:
            if routine.patient.document_id == patient_id:
                routine.toggle_ecg()

    async def __start(self):
        tasks = []
        for routine in self.routines:
            tasks.append(routine.routine())
        await asyncio.gather(*tasks)
    
