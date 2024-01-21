import asyncio

class PatientRoutine:
    def __init__(self, patient: Patient):
        self.patient = patient
        self.task = None
        self.loop = None

    def start(self):
        self.loop = asyncio.get_event_loop()
        self.task = self.loop.create_task(self.__routine())
        self.loop.run_forever(self.task)

    def stop(self):
        self.task.cancel()
        self.loop.close()

    async def __routine(self):
        await asyncio.sleep(2)
        print(self.patient)

    
