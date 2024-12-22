import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { RegisterUser } from "../store/interfaces";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {

      const result = await signInWithPopup( FirebaseAuth, googleProvider );
      // Obtener algun token o cosas que desee del usuario
      /* const credentials = GoogleAuthProvider.credentialFromResult( result );*/
      const { displayName, email, photoURL, uid } = result.user;

      return {
        ok: true,
        displayName,
        email,
        photoURL,
        uid,
      }

  } catch (error) {
    // const errorCode = error.code;
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
    console.log( resp );
    
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