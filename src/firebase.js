

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAj3xIhdax43NZpAvTGGxVb3SooZNHForM",
  authDomain: "cohesive-math-404921.firebaseapp.com",
  projectId: "cohesive-math-404921",
  storageBucket: "cohesive-math-404921.appspot.com",
  messagingSenderId: "670790154801",
  appId: "1:670790154801:web:13cda5e9268fc25c993310",
  measurementId: "G-04486E9EQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);