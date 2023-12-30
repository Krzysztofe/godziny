// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvvdzLRow-8AdA5zJH6uv19MOsPLNwC3A",
//   authDomain: "godziny-3b30f.firebaseapp.com",
//   databaseURL:
//     "https://godziny-3b30f-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "godziny-3b30f",
//   storageBucket: "godziny-3b30f.appspot.com",
//   messagingSenderId: "367174950216",
//   appId: "1:367174950216:web:897bcc9e5245cde697677d",
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const database = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
