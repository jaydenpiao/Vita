from dataclasses import dataclass
from datetime import datetime

PATIENT_METADATA = [
    {
        "patient_id": 0,
        "data": {
            "name": "John Doe",
            "age": 25,
            "birthdate": datetime(1995, 1, 1),
            "room": "100A",
            "medical_history": "None",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[1, 2, 3], location={"lat": 0, "lon": 0})
        }
    },
    {
        "patient_id": 1,
        "data": {
            "name": "Jeff Doe",
            "age": 45,
            "birthdate": datetime(2000, 12, 26),
            "room": "200A",
            "medical_history": "History of heart disease",
            "emergency_contact": Contact(name="Jane Doe", phone="555-555-5555"),
            "sensor_data": SensorData(ecg=[5, 4, 3], location={"lat": 0, "lon": 0})
        }
    }
]
