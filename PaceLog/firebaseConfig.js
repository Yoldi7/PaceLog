// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';  

const firebaseConfig = {

 apiKey: "AIzaSyD45QZlFh89Kkbrw0HeqzOsAKw_jRoDuT0",


 authDomain: "pacelog-f2163.firebaseapp.com",


 databaseURL: "https://pacelog-f2163-default-rtdb.europe-west1.firebasedatabase.app",


 projectId: "pacelog-f2163",


 storageBucket: "pacelog-f2163.firebasestorage.app",


 messagingSenderId: "32285038014",


 appId: "1:32285038014:web:ad0e44b7463af1fdbc15ef",


 measurementId: "G-V0B3FPYPZG"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una referencia a Firestore
export const db = getFirestore(app);
