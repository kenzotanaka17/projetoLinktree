// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLTG3XjiHwioBv1bJ_3TEr3EsIY_8mc_A",
  authDomain: "projeto-linktree.firebaseapp.com",
  projectId: "projeto-linktree",
  storageBucket: "projeto-linktree.appspot.com",
  messagingSenderId: "198081277229",
  appId: "1:198081277229:web:ab03481508861b59c337a4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };