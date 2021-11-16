import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDMViJUApPHZa_aveYvMGHL3_8fklok0bY",
    authDomain: "lo-de-cora.firebaseapp.com",
    databaseURL: "https://lo-de-cora-default-rtdb.firebaseio.com",
    projectId: "lo-de-cora",
    storageBucket: "lo-de-cora.appspot.com",
    messagingSenderId: "744573470312",
    appId: "1:744573470312:web:d995f27bdc610ad2b25ddd",
    measurementId: "G-BMSMR3BZ3K"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };

