import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { getDatabase } from "firebase/database";

export const app = initializeApp(firebaseConfig);
export const da = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
