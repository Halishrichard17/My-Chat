// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD7b8pjUspKs4tkWEUP-lGa4siTQWTF_4s",
  authDomain: "ezr-react.firebaseapp.com",
  projectId: "ezr-react",
  storageBucket: "ezr-react.appspot.com",
  messagingSenderId: "752359507628",
  appId: "1:752359507628:web:0bfdfcd2d80fbd71134109",
  measurementId: "G-2QMM722KQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;