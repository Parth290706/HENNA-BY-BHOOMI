import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwh3Z9yKWoztgfsfy8gqN6MKLU8BcPLrM",
  authDomain: "henna-reviews.firebaseapp.com",
  projectId: "henna-reviews",
  storageBucket: "henna-reviews.firebasestorage.app",
  messagingSenderId: "917964579872",
  appId: "1:917964579872:web:dafb1868de781ef52d4845",
  measurementId: "G-0M2V1M4MMX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };