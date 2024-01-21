import asyncio
from documents import Patient


class PatientRoutine:
    def __init__(self, patient: Patient):
        self.patient = patient

    async def routine(self):
        while True:
            await asyncio.sleep(2)
            print(self.patient)


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
    
