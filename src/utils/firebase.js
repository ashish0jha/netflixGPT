// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATv2n0aETji_63G0j5WW2FfrzVyIS8Jls",
  authDomain: "netflixgpt-5f74d.firebaseapp.com",
  projectId: "netflixgpt-5f74d",
  storageBucket: "netflixgpt-5f74d.firebasestorage.app",
  messagingSenderId: "965494469006",
  appId: "1:965494469006:web:633a4e849be91c7706f4df",
  measurementId: "G-0RC398ZX0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();