// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfRUT9sB1pGMq81_iugOwGoggF4ojjOTI",
  authDomain: "auth-2aefc.firebaseapp.com",
  projectId: "auth-2aefc",
  storageBucket: "auth-2aefc.appspot.com",
  messagingSenderId: "1096774898243",
  appId: "1:1096774898243:web:742dd39f7066af23173af6",
  measurementId: "G-W9DX8RWHQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);