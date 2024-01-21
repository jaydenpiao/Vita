from dataclasses import dataclass
from datetime import datetime
from documents import Contact, SensorData

PATIENT_METADATA = [
    {
        "patient_id": "0",
        "path": ["KITCHEN", "DINING ROOM", "HEARTH ROOM", "ROOM 6", "BATH 6"],
        "data": {
            "name": "John Doe",
            "age": 55,
            "birthdate": datetime(1995, 1, 1),
            "room": "6",
            "medical_history": "None",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[1, 2, 3], location="KITCHEN", is_having_heart_attack=False)
        }
    },
    {
        "patient_id": "1",
        "path": ["HEARTH ROOM", "ROOM 1", "BATH 1", "ROOM 1", "HEARTH ROOM", "ROOM 2", "HEARTH ROOM"],
        "data": {
            "name": "Jeff Doe",
            "age": 45,
            "birthdate": datetime(2000, 12, 26),
            "room": "1",
            "medical_history": "History of heart disease",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[5, 4, 3], location="HEARTH ROOM", is_having_heart_attack=False)
        }
    },
    {
        "patient_id": "2",
        "path": ["HEARTH ROOM", "LIBRARY", "LIBRARY", "ROOM 9", "BATH 9", "BATH 2", "ROOM 9"],
        "data": {
            "name": "Wendy Farley",
            "age": 68,
            "birthdate": datetime(1955, 11, 20),
            "room": "9",
            "medical_history": "Risk of stroke, high blood pressure",
            "emergency_contact": Contact(name="Marissa Farley", phone="604-418-8092"),
            "sensor_data": SensorData(ecg=[1, 2, 3], location="HEARTH ROOM", is_having_heart_attack=False)
        }
    },
    {
        "patient_id": "3",
        "path": ["ROOM 7", "ROOM 7", "DINING ROOM", "KITCHEN", "KITCHEN", "ROOM 2", "HEARTH ROOM"],
        "data": {
            "name": "Christina Robins",
            "age": 71,
            "birthdate": datetime(1948, 5, 11),
            "room": "7",
            "medical_history": "N/A",
            "emergency_contact": Contact(name="John Robins", phone="713-838-3918"),
            "sensor_data": SensorData(ecg=[5, 4, 3], location="ROOM 7", is_having_heart_attack=False)
        }
    },
    {
        "patient_id": "4",
        "path": ["ROOM 12", "BATH 12", "ROOM 12", "SPA", "SPA", "SPA", "ROOM 12"],
        "data": {
            "name": "Jeff Doe",
            "age": 45,
            "birthdate": datetime(2000, 12, 26),
            "room": "200A",
            "medical_history": "History of heart disease",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[5, 4, 3], location="HEARTH ROOM", is_having_heart_attack=False)
        }
    }
]
