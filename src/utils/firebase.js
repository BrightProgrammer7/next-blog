// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyALeDKFQKSoh_Oz04C7DrWtKcZJiDqB-Ik",
  apiKey: process.env.FIREBASE,
  authDomain: "blog-events-891ef.firebaseapp.com",
  projectId: "blog-events-891ef",
  storageBucket: "blog-events-891ef.appspot.com",
  messagingSenderId: "829984907370",
  appId: "1:829984907370:web:9f781ecbd1df867dad6a13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);