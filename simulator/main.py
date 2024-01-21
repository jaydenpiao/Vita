import asyncio
import firebase_admin
import signal

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
        path = patient["path"]
        patient = Patient.from_dict(db, COLLECTION_ID, patient_id, data)
        patients.append((patient, path))
    return patients

# Authenticate with firebase
cred = firebase_admin.credentials.Certificate("./credentials.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
patients = create_patient_list(db, PATIENT_METADATA)

# Run the event loop
simulator = Simulator(patients, "./deploy.npz", "./model")

def signal_handler(sig, frame):
    while True:
        user_input = input("[0-4]: Toggle ECG State\ne: Exit\n")
        if user_input == "e":
            exit(0)
        elif user_input in ["0", "1", "2", "3", "4"]:
            simulator.toggle_ecg(user_input)
            break

try:
    signal.signal(signal.SIGINT, signal_handler)
    simulator.start()
except KeyboardInterrupt:
    # Allow the program to exit on Ctrl+C
    pass
finally:
    print("Exiting Simulation...")