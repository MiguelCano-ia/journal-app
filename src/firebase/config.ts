import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP2VL9BtIpClUUt6piFTj0WOereEvK0Gw",
  authDomain: "journal-app-ffac6.firebaseapp.com",
  projectId: "journal-app-ffac6",
  storageBucket: "journal-app-ffac6.firebasestorage.app",
  messagingSenderId: "1073504933619",
  appId: "1:1073504933619:web:b33a3c9729112a60f40986"
};

// Initialize Firebase
export const Firebaseapp  = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( Firebaseapp );
export const FiresbasDB   = getFirestore( Firebaseapp );

