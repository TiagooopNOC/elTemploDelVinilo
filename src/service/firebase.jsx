// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "eltemplodelvinilo.firebaseapp.com",
  projectId: "eltemplodelvinilo",
  storageBucket: "eltemplodelvinilo.firebasestorage.app",
  messagingSenderId: "1054579622709",
  appId: "1:1054579622709:web:5d32f446814c47510f427c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obtener base de datos

export const db = getFirestore(app);
