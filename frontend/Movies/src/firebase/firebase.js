// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-UsQcxmN3a5MA1CiD5XeeUbJeolGAODo",
  authDomain: "crud-react-e071a.firebaseapp.com",
  projectId: "crud-react-e071a",
  storageBucket: "crud-react-e071a.appspot.com",
  messagingSenderId: "334423489921",
  appId: "1:334423489921:web:c86a2c0a4292ffc716bc80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export{
    db
}