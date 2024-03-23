// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUFuMX4n6cvyMA-C991razs6rBw_nvi0U",
  authDomain: "myauth-2.firebaseapp.com",
  projectId: "myauth-2",
  storageBucket: "myauth-2.appspot.com",
  messagingSenderId: "1021061328801",
  appId: "1:1021061328801:web:ca388963ad2ae584c225e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;