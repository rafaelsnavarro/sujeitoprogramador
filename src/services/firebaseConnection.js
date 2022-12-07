import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASHd2qZO35zDVRBfdNtIxUZkGHsi3A6wg",
  authDomain: "devlinks-bdde2.firebaseapp.com",
  projectId: "devlinks-bdde2",
  storageBucket: "devlinks-bdde2.appspot.com",
  messagingSenderId: "219541720903",
  appId: "1:219541720903:web:9e119828dd98b1a5f08662",
  measurementId: "G-1216V8T58Y"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth}; 