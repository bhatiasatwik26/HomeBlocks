import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeblocs-96c14.firebaseapp.com",
  projectId: "homeblocs-96c14",
  storageBucket: "homeblocs-96c14.firebasestorage.app",
  messagingSenderId: "122775226179",
  appId: "1:122775226179:web:0236bc0841e59a70fe91f6"
};


export const app = initializeApp(firebaseConfig);