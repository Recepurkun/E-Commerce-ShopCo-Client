// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);



import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
