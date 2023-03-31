import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCGqL3P8aEShxCA0O0IHK4NoWhka7K6DA8",
  authDomain: "rescueride-86e99.firebaseapp.com",
  projectId: "rescueride-86e99",
  storageBucket: "rescueride-86e99.appspot.com",
  messagingSenderId: "729302321350",
  appId: "1:729302321350:web:1ac79ba25e64c96a862fc7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
