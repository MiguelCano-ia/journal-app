import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID,
};

// Initialize Firebase
export const Firebaseapp  = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( Firebaseapp );
export const FiresbasDB   = getFirestore( Firebaseapp );

