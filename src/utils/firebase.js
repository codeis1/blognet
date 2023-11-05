// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blognet-f27f7.firebaseapp.com",
  projectId: "blognet-f27f7",
  storageBucket: "blognet-f27f7.appspot.com",
  messagingSenderId: "700231923588",
  appId: "1:700231923588:web:3c1205ada70028c7514fd1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
