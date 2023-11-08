// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-Uc1GYw8cql5ZICUfzThWEQArbLbC-wg",
    authDomain: "capstone-hotspot-locator.firebaseapp.com",
    projectId: "capstone-hotspot-locator",
    storageBucket: "capstone-hotspot-locator.appspot.com",
    messagingSenderId: "10780137241",
    appId: "1:10780137241:web:e012bf4f754a07a9305788",
    measurementId: "G-RWS2Y33TND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
