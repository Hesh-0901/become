// js/firebase.config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBw82-mAVz-u0loEj3S0gIDHUlzMfNXOOg",
  authDomain: "become-fcdea.firebaseapp.com",
  projectId: "become-fcdea",
  // CHANGEMENT ICI : On utilise le bucket où le CORS est activé
  storageBucket: "become-fcdea.firebasestorage.app", 
  messagingSenderId: "1078316645594",
  appId: "1:1078316645594:web:7a5de32d656b85db8df9e3",
  measurementId: "G-G4NKXTPZ42"
};

// Initialisation Firebase
export const app = initializeApp(firebaseConfig);

// Services Firebase
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// CHANGEMENT ICI : On passe explicitement l'URL gs:// pour être 100% sûr
export const storage = getStorage(app, "gs://become-fcdea.firebasestorage.app");
