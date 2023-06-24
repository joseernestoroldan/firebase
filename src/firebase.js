// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZR0G-hGPqvW_5c-HMqeXWZFxxtcO_4lk",
  authDomain: "autentificacion-d4119.firebaseapp.com",
  projectId: "autentificacion-d4119",
  storageBucket: "autentificacion-d4119.appspot.com",
  messagingSenderId: "116754447632",
  appId: "1:116754447632:web:da0968d9e51a8709def995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);