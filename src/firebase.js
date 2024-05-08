import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJxqShudqEmEphrbLMCQYJM7McFlAkY18",
  authDomain: "fir-cb348.firebaseapp.com",
  projectId: "fir-cb348",
  storageBucket: "fir-cb348.appspot.com",
  messagingSenderId: "593641094442",
  appId: "1:593641094442:web:f1253b507ce04815d43253"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
