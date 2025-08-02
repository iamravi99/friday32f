import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCXT3ZqKknjG6BxwHUsaC4lgUTs7DYjqaA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mark32-a85cc.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mark32-a85cc",
  storageBucket: "mark32-a85cc.firebasestorage.app",
  messagingSenderId: "607802561056",
  appId: "1:607802561056:web:366ffc15d074971a912245",
  measurementId: "G-V4J5VBS8R3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Only your email can access admin
export const ADMIN_EMAIL = "ravinder.explore@gmail.com"; // Replace with your email