from abc import abstractmethod, ABC
from datetime import datetime


class Document(ABC):

    def __init__(self, db, collection_id: str, document_id: str):
        self.__collection_id = collection_id
        self.__document_id = document_id
        self.__ref = db.collection(collection_id).document(document_id)

    @abstractmethod
    def to_dict(self):
        pass

    @abstractmethod
    def __repr__(self):
        pass

    @property
    def collection_id(self) -> str:
        return self.__collection_id
    
    @property
    def document_id(self) -> str:
        return self.__document_id
    
    @property
    def ref(self):
        return self.__ref


class Contact:
    def __init__(self, name: str, phone: str):
        self.__name = name
        self.__phone = phone

    def to_dict(self):
        return {
            "name": self.__name,
            "phone": self.__phone
        }

    @property
    def name(self) -> str:
        return self.__name

    @property
    def phone(self) -> str:
        return self.__phone


class SensorData:
    def __init__(self, ecg: list, location: str):
        self.__ecg = ecg
        self.__location = location
    
    def to_dict(self):
        return {
            "ecg": self.__ecg,
            "location": self.__location
        }

    @property
    def ecg(self) -> list:
        return self.__ecg

    @property
    def location(self) -> str:
        return self.__location

    
class Patient(Document):

    def __init__(
        self,
        db,
        collection_id: str,
        document_id: str,
        name: str,
        age: int,
        birthdate: datetime,
        room: str,
        medical_history: str,
        emergency_contact: Contact,
        sensor_data: SensorData):
        
        super().__init__(db, collection_id, document_id)
        self.__name = name
        self.__age = age
        self.__birthdate = datetime.strftime(birthdate, "%Y-%m-%d")
        self.__room = room
        self.__medical_history = medical_history
        self.__emergency_contact = emergency_contact
        self.__sensor_data = sensor_data
        
    def to_dict(self):
        return {
            "name": self.__name,
            "age": self.__age,
            "birthdate": self.__birthdate,
            "room": self.__room,
            "medical_history": self.__medical_history,
            "emergency_contact": self.__emergency_contact.to_dict(),
            "sensor_data": self.__sensor_data.to_dict()
        }

    @staticmethod
    def from_dict(db, collection_id: str, document_id: str, data: dict):
        return Patient(
            db,
            collection_id,
            document_id,
            data["name"],
            data["age"],
            data["birthdate"],
            data["room"],
            data["medical_history"],
            data["emergency_contact"],
            data["sensor_data"]
        )

    def __repr__(self):
        return f"Patient(name={self.__name}, age={self.__age}, birthdate={self.__birthdate}, " +\
        f"room={self.__room}, medical_history={self.__medical_history}, " +\
        f"emergency_contact={self.__emergency_contact}, sensor_data={self.__sensor_data})"

    def update(self, **kwargs):
        for key, value in kwargs.items():
            if key == "emergency_contact":
                self.__emergency_contact = value
            elif key == "sensor_data":
                self.__sensor_data = value
            else:
                setattr(self, f"_{key}", value)
    
    def send_update(self, full_update=False):
        if full_update:
            self.ref.set(self.to_dict())
        else:
            self.ref.update(self.__sensor_data.to_dict())
