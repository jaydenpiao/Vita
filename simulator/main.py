import asyncio
import firebase_admin

from firebase_admin import firestore

class Patient:
    def __init__ (self, name, age, sex, history):
        self.name = name
        self.age = age
        self.sex = sex
        self.history = history

    def display_info(self):
        print(f"Patient Information:")
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Gender: {self.sex}")
        print ("Medical History: ")
        if not self.history:
            print(f"Patient has no history")
        else:
            for condition in self.history:
                print (f" - {condition}")

if __name__ == "__main__":
    patient1 = Patient(name="John Doe", age=68, sex="Male", history=[])

    patient1.display_info()

    patient2 = Patient(name="Jane Doe", age=72, sex="Female", history=["Hypertension"])
    patient2.display_info()

"""
async def my_func(db):
    count = 0
    doc_ref = db.collection("counters").document("counter1")
    while True:
        # Simulate a delay with asyncio.sleep
        await asyncio.sleep(1)
        print(f"Pushing {count} to DB...")
        doc_ref.set({"count" : count})
        count = (count + 1) if (count < 9) else 0


# Authenticate with firebase
cred = firebase_admin.credentials.Certificate("./credentials.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()


# Create an event loop
loop = asyncio.get_event_loop()

# Schedule my_func to run
task = loop.create_task(my_func(db))

# Run the event loop
try:
    loop.run_until_complete(task)
except KeyboardInterrupt:
    # Allow the program to exit on Ctrl+C
    pass
finally:
    loop.close()
"""