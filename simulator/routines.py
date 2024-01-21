import asyncio
from documents import Patient, SensorData
import random


class PatientRoutine:
    def __init__(self, patient: Patient, sleep_period_sec: int = 2):
        self.patient = patient
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
        return {"lat": random.randint(0, 10), "lon": random.randint(0, 10)}


class Simulator:
    def __init__(self, patients: list):
        self.patients = patients
        self.routines = []

        for patient in patients:
            self.routines.append(PatientRoutine(patient))

    def start(self):
        asyncio.run(self.__start())

    async def __start(self):
        tasks = []
        for routine in self.routines:
            tasks.append(routine.routine())
        await asyncio.gather(*tasks)
    
