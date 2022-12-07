import { initializeApp } from "firebase/app";
//firebaSE FIRESTORE functions
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";

//firebase storage functions
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf6tqvy041zZvF548XpZDkrrIWqh_Tss0",
  authDomain: "vueonlinestore-185af.firebaseapp.com",
  projectId: "vueonlinestore-185af",
  storageBucket: "vueonlinestore-185af.appspot.com",
  messagingSenderId: "553213444489",
  appId: "1:553213444489:web:185c993da82c67ca13a158",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
};
