import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA76OQQbKVP-fZ5uyCqKfvSYc-PmO6aF40",
  authDomain: "blue-study-manager.firebaseapp.com",
  projectId: "blue-study-manager",
  storageBucket: "blue-study-manager.appspot.com",
  messagingSenderId: "577983134264",
  appId: "1:577983134264:web:a6fb4249429121022f84cd",
  measurementId: "G-ZKT561N517"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
getAnalytics();
