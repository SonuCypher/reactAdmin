// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
// import {getFirestore} from 'firebase/firestore'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXvGAcvq9-8hElA2oYUrgGu3nM_WAm_IM",
  authDomain: "reactadmin-dc391.firebaseapp.com",
  projectId: "reactadmin-dc391",
  storageBucket: "reactadmin-dc391.appspot.com",
  messagingSenderId: "423396235229",
  appId: "1:423396235229:web:cd6eaf53317ac895324834"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db,auth}