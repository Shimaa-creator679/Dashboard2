// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfgjHYJDKHcZVUCmMwlhiKmAijOqZqWZg",
  authDomain: "dashboard3-c7792.firebaseapp.com",
  projectId: "dashboard3-c7792",
  storageBucket: "dashboard3-c7792.firebasestorage.app",
  messagingSenderId: "417745107295",
  appId: "1:417745107295:web:48226513521de71e451eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
