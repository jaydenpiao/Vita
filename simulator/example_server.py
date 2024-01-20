import asyncio
import firebase_admin

from firebase_admin import firestore

async def my_func(db):
    count = 0
    doc_ref = db.collection("counters").document("counter1")
    while True:
        # Simulate a delay with asyncio.sleep
        await asyncio.sleep(1)
        print(f"Pushing {count} to DB...")
        #doc_ref.set({"count" : count})
        count = (count + 1) if (count < 9) else 0

# Authenticate with firebase
cred = firebase_admin.credentials.Certificate("./credentials.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Create basic data dictionary
patient = {
    "name": "Mary Smith",
    "age": 83,
    "birthdate": "1942-12-23",
    "room": "100D",
    "sensor_data": {
        "ecg": [0, 1, 3, 4, 5],
        "location": {
            "lat": 80,
            "lon": 80
        }
    }
}

db.collection("patients").document("0").set(patient)

# Create an event loop
#loop = asyncio.get_event_loop()

# Schedule my_func to run
#task = loop.create_task(my_func(db))
#loop.run_forever()

