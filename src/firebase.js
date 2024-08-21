// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider,onAuthStateChanged} from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFpbOPdZztrMknbJN1fOVhvLE0JKHleQM",
  authDomain: "news-monk-c17ce.firebaseapp.com",
  projectId: "news-monk-c17ce",
  storageBucket: "news-monk-c17ce.appspot.com",
  messagingSenderId: "440070201840",
  appId: "1:440070201840:web:38822da90c9df980ef3d35",
  measurementId: "G-L2X27Z2G12",
 databaseURL: "https://news-monk-c17ce-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();
const database =initializeApp(firebaseConfig);
const googleProvider=new GoogleAuthProvider();
const db = getFirestore(app);
export{app,auth,database,db,googleProvider,onAuthStateChanged};