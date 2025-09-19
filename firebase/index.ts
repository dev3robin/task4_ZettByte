// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFdfLS92q3jiLAQQKeIAGiFmQzPIYBC8s",
  authDomain: "lifeloop-19e2c.firebaseapp.com",
  projectId: "lifeloop-19e2c",
  storageBucket: "lifeloop-19e2c.firebasestorage.app",
  messagingSenderId: "939457094063",
  appId: "1:939457094063:web:152d631a19088b722c8f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();