import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { RegisterUser, LoginUser } from "../store/interfaces";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {

      const result = await signInWithPopup( FirebaseAuth, googleProvider );
      const { displayName, email, photoURL, uid } = result.user;

      return {
        ok: true,
        displayName,
        email,
        photoURL,
        uid,
      }

  } catch (error) {
    const errorMessage = (error as Error).message;

    return {
      ok: false,
      errorMessage,
    }
  }
}

export const registerUser = async ({ email, password, displayName }: RegisterUser ) => {
  try {
    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
    const { uid, photoURL } = resp.user;
    // FirebaseAuth.currentUser: Usuario actual
    if ( !FirebaseAuth.currentUser ) throw new Error("No current user");
    await updateProfile( FirebaseAuth.currentUser, {
      displayName,
    } );
  
    
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
      email,
    }

  } catch (error) {
    return { ok: false, errorMessage: (error as Error).message };
  }
}

export const loginUser = async ( { email, password }: LoginUser) => {
  try {
    const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

  return {
    ok: true,
    uid,
    photoURL,
  }
  } catch ( error ) {
    return { ok: false, errorMessage: (error as Error).message }
  }
}