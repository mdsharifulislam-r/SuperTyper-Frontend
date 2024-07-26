// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GithubAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDl8ecky8w1G8YsSau2_ka5Y9u_49f3z6c",
  authDomain: "super-typer-c31a8.firebaseapp.com",
  projectId: "super-typer-c31a8",
  storageBucket: "super-typer-c31a8.appspot.com",
  messagingSenderId: "729671847676",
  appId: "1:729671847676:web:3ade1364c6981e432b9179",
  measurementId: "G-P7VRY2MR68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GithubAuthProvider()

export {auth,provider}