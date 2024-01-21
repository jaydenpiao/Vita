from dataclasses import dataclass
from datetime import datetime
from documents import Contact, SensorData

PATIENT_METADATA = [
    {
        "patient_id": "0",
        "path": ["KITCHEN", "DINING ROOM", "HEARTH ROOM", "ROOM 6", "BATH 6"],
        "data": {
            "name": "John Doe",
            "age": 25,
            "birthdate": datetime(1995, 1, 1),
            "room": "100A",
            "medical_history": "None",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[1, 2, 3], location="KITCHEN")
        }
    },
    {
        "patient_id": "1",
        "path": ["HEARTH ROOM", "ROOM 1", "BATH 1", "ROOM 1", "HEARTH ROOM", "ROOM 2", "HEARTH ROOM"],
        "data": {
            "name": "Jeff Doe",
            "age": 45,
            "birthdate": datetime(2000, 12, 26),
            "room": "200A",
            "medical_history": "History of heart disease",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[5, 4, 3], location={"lat": 0, "lon": 0})
        }
    },
    {
        "patient_id": "2",
        "path": ["PATIO", "ROOM 10", "BATH 10", "ROOM 10", "DINING ROOM", "ROOM 10", "PATIO"],
        "data": {
            "name": "James Doe",
            "age": 65,
            "birthdate": datetime(1958, 6, 23),
            "room": "300A",
            "medical_history": "History of hypertension",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[1, 2, 3], location={"lat": 0, "lon": 0})
        }
    },
    {
        "patient_id": "3",
        "path": ["ROOM 12", "BATH 12", "ROOM 12", "SPA", "SPA BATH", "ROOM 12"],
        "data": {
            "name": "Jim Doe",
            "age": 85,
            "birthdate": datetime(1938, 9, 2),
            "room": "400A",
            "medical_history": "Type I diabetes",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[5, 4, 3], location={"lat": 0, "lon": 0})
        }
    }
]
