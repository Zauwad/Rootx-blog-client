// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhCP3DWASPDIySgEwGQUA6WU8U9J1GRs4",
    authDomain: "rootx-blog.firebaseapp.com",
    projectId: "rootx-blog",
    storageBucket: "rootx-blog.firebasestorage.app",
    messagingSenderId: "12407601941",
    appId: "1:12407601941:web:bc7df3fa78fa4ec358871c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);