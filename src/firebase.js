// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6pDSPFNcAyiDfd9PkbeUZ_zzGQ6pkk0M",
  authDomain: "website-16efe.firebaseapp.com",
  projectId: "website-16efe",
  storageBucket: "website-16efe.firebasestorage.app",
  messagingSenderId: "473489024447",
  appId: "1:473489024447:web:9da3c477ebb92e0fd1ed0a",
  measurementId: "G-0GG4RGT89H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);