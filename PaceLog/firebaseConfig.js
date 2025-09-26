// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "pacelog-f2163.firebaseapp.com",
  projectId: "pacelog-f2163",
  storageBucket: "pacelog-f2163.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una referencia a Firestore
export const db = getFirestore(app);
