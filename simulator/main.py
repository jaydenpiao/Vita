import asyncio
import firebase_admin

from firebase_admin import firestore

from documents import Patient
from routines import Simulator
from patients import PATIENT_METADATA

COLLECTION_ID = "patients"

def create_patient_list(db, patient_metadata: list):
    patients = []
    for patient in patient_metadata:
        patient_id = patient["patient_id"]
        data = patient["data"]
        patient = Patient.from_dict(db, COLLECTION_ID, patient_id, data)
        patients.append(patient)
    return patients


# Authenticate with firebase
cred = firebase_admin.credentials.Certificate("./credentials.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
patients = create_patient_list(db, PATIENT_METADATA)

# Run the event loop
simulator = Simulator(patients)
try:
    asyncio.run(simulator.start())
except KeyboardInterrupt:
    # Allow the program to exit on Ctrl+C
    pass
finally:
    asyncio.run(simulator.stop())