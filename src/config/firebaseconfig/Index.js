import { initializeApp } from "firebase/app";
// Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//Database
import {
  getDatabase,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1twcFZMzGMbkd9mDjQEcqN5WeJEinaEc",
  authDomain: "hackathonproject-b5d86.firebaseapp.com",
  projectId: "hackathonproject-b5d86",
  storageBucket: "hackathonproject-b5d86.appspot.com",
  messagingSenderId: "857055963413",
  appId: "1:857055963413:web:bd641a07c244278c6c611c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
};
