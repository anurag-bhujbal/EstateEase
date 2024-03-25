// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "estateease-29259.firebaseapp.com",
  projectId: "estateease-29259",
  storageBucket: "estateease-29259.appspot.com",
  messagingSenderId: "537422441560",
  appId: "1:537422441560:web:a1691668a75e8297c7ee2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);