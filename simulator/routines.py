import asyncio
from documents import Patient

class PatientRoutine:
    def __init__(self, patient: Patient):
        self.patient = patient

    async def routine(self):
        await asyncio.sleep(2)
        print(self.patient)


class Simulator:
    def __init__(self, patients: list):
        self.patients = patients
        self.task = None
        self.loop = None
        self.routines = []
        for patient in patients:
            self.routines.append(PatientRoutine(patient))

    async def start(self):
        tasks = []
        for routine in self.routines:
            tasks.append(asyncio.create_task(routine.routine()))
        self.loop = asyncio.get_running_loop()
        self.task = self.loop.create_task(asyncio.gather(*tasks))
        self.loop.run_forever()

    async def stop(self):
        self.task.cancel()
        self.loop.stop()    
