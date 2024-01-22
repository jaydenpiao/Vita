// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-wkuRH7vZpqK2TVgLMPXi91zVlFgVHio",
  authDomain: "vita-91ffd.firebaseapp.com",
  projectId: "vita-91ffd",
  storageBucket: "vita-91ffd.appspot.com",
  messagingSenderId: "758312492141",
  appId: "1:758312492141:web:2687ff349e7cff002a3364",
  measurementId: "G-Y604K4V1ZQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const patientsRef = collection(db, 'patients');

export default app;