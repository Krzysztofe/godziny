import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyB63Mmz9Gv6J2G3hjyNCNN4I6hh29vQG-c",
  authDomain: "godziny-7a52b.firebaseapp.com",
  databaseURL:
    "https://godziny-7a52b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "godziny-7a52b",
  storageBucket: "godziny-7a52b.appspot.com",
  messagingSenderId: "871341049096",
  appId: "1:871341049096:web:c2b1a4a6c06e63b255d8bd",
  measurementId: "G-ZHWC8RSWPQ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

