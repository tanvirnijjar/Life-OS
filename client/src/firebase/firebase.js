import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc3XJanowthnispiqjcU6O6dd1-uRjcOY",
  authDomain: "life-os-f0c54.firebaseapp.com",
  projectId: "life-os-f0c54",
  storageBucket: "life-os-f0c54.firebasestorage.app",
  messagingSenderId: "156477501366",
  appId: "1:156477501366:web:cf3adb1376203b20e31b17",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;