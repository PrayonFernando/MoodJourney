// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChApM8SczD3lZuzzC-rimB5LrugAetSFE",
  authDomain: "moodjourney-fb34d.firebaseapp.com",
  projectId: "moodjourney-fb34d",
  storageBucket: "moodjourney-fb34d.firebasestorage.app",
  messagingSenderId: "1087276645441",
  appId: "1:1087276645441:web:4b2e1ef2223a916efc5ac0",
  measurementId: "G-Q04LNHCMJD",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app; // 🔹 Ensure you export `app` if needed
