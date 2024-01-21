import asyncio
from documents import Patient, SensorData
import random


class PatientRoutine:
    def __init__(self, patient: Patient, path: list, sleep_period_sec: int = 5):
        self.patient = patient
        self.path = path
        self.path_index = 0
        self.path_index_increment = 1
        self.sleep_period_sec = sleep_period_sec
        self.first_routine_executed = False

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
            self.patient.update(sensor_data=await self.__get_updated_sensor_data())
            self.patient.send_update(full_update=False)

    async def __get_updated_sensor_data(self):
        return SensorData(
            ecg=await self.__get_updated_ecg(),
            location=await self.__get_updated_location()
        )

    async def __get_updated_ecg(self):
        return [random.randint(0, 10), random.randint(0, 10), random.randint(0, 10)]

    async def __get_updated_location(self):
        room = self.path[self.path_index]
        self.path_index += self.path_index_increment
        if self.path_index >= len(self.path) - 1:
            self.path_index_increment = -1
        elif self.path_index <= 0:
            self.path_index_increment = 1
        return room


class Simulator:
    def __init__(self, patients: list):
        self.routines = []

        for patient, path in patients:
            self.routines.append(PatientRoutine(patient, path))

    def start(self):
        asyncio.run(self.__start())

    async def __start(self):
        tasks = []
        for routine in self.routines:
            tasks.append(routine.routine())
        await asyncio.gather(*tasks)
    
