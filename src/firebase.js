import { initializeApp} from "firebase/app";
import firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { browserLocalPersistence } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwG49qhxOhj4vm1p4zNwM3UGfhHEA2FM0",
    authDomain: "cozinhex.firebaseapp.com",
    projectId: "cozinhex",
    storageBucket: "cozinhex.appspot.com",
    messagingSenderId: "162587160055",
    appId: "1:162587160055:web:4b73e462ffc8402d8952f2",
    measurementId: "G-PRPZBWSNCD"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = firebaseAuth.initializeAuth(app,{
  persistence: browserLocalPersistence
});

export {db, auth};