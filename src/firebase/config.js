// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJyr-vOrkWIsosl6jphDCbPUlqjnX8qto",
  authDomain: "react-courses-30105.firebaseapp.com",
  projectId: "react-courses-30105",
  storageBucket: "react-courses-30105.firebasestorage.app",
  messagingSenderId: "334532295823",
  appId: "1:334532295823:web:041805f5f9eea3c3db84fa",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
