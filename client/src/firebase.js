// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogmern-4a6d2.firebaseapp.com",
  projectId: "blogmern-4a6d2",
  storageBucket: "blogmern-4a6d2.firebasestorage.app",
  messagingSenderId: "141801787936",
  appId: "1:141801787936:web:39000b8f901f17b2aea245"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
