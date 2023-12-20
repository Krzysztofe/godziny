import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvvdzLRow-8AdA5zJH6uv19MOsPLNwC3A",
  authDomain: "godziny-3b30f.firebaseapp.com",
  databaseURL:
    "https://godziny-3b30f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "godziny-3b30f",
  storageBucket: "godziny-3b30f.appspot.com",
  messagingSenderId: "367174950216",
  appId: "1:367174950216:web:897bcc9e5245cde697677d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
