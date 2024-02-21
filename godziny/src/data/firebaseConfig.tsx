import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Database, getDatabase } from "firebase/database";

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

class FirebaseSingleton {
  app: FirebaseApp | null = null;
  auth: Auth | null = null;
  database: Database | null = null;
  static instance: FirebaseSingleton | null = null;

  private constructor() {
    this.initializeApp();
  }

  initializeApp() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.database = getDatabase(this.app);
  }

  static getInstance() {
    if (!FirebaseSingleton.instance) {
      FirebaseSingleton.instance = new FirebaseSingleton();
    }
    return FirebaseSingleton.instance;
  }
}

export default FirebaseSingleton;
