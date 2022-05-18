// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr1m5qgBuSJ-VX_u_GxIvvAOuelI4QbcI",
    authDomain: "to-do-app-f1366.firebaseapp.com",
    projectId: "to-do-app-f1366",
    storageBucket: "to-do-app-f1366.appspot.com",
    messagingSenderId: "237243329713",
    appId: "1:237243329713:web:d5ff891a1d910783dec690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth