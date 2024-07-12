import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7m4oGpTSMPtPs8vwzbNoN_rmd3UG6ycs",
    authDomain: "e-commerce-shopco.firebaseapp.com",
    projectId: "e-commerce-shopco",
    storageBucket: "e-commerce-shopco.appspot.com",
    messagingSenderId: "1034766579335",
    appId: "1:1034766579335:web:a62d379e8b156f469f6a22",
    measurementId: "G-DSZ7EEPB4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
