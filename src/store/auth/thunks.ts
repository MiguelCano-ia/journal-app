import { loginUser, logoutFirebase, registerUser, signInWithGoogle } from "../../firebase/providers";
import { LoginUser, RegisterUser } from "../interfaces";
import { clearNoteLogout } from "../journal";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./";

export const startGoogleSignIn = () => {
  return async ( dispatch: AppDispatch ) => {
    dispatch( checkingCredentials() );

    const result = await signInWithGoogle();
    if ( !result.ok ) return dispatch( logout({ errorMessage: result.errorMessage }) );
    dispatch( login( result ));
  }
}

export const startCreatingUser = ( { email, password, displayName }: RegisterUser ) => {
  return async ( dispatch: AppDispatch ) => {
    dispatch( checkingCredentials() );

    const { ok, uid, photoURL, errorMessage } = await registerUser({ email, password, displayName });

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ email, displayName, photoURL, uid }) ); 
  }
}

export const startLoginUser = ( { email, password }: LoginUser ) => {
  return async ( dispatch: AppDispatch ) => {
    dispatch( checkingCredentials() );

    const { ok, uid, photoURL, displayName, errorMessage } = await loginUser({ email, password });

    if ( !ok ) return dispatch( logout( { errorMessage } ) );

    dispatch( login( { uid, email, displayName, photoURL } ) )
  }
}

export const startLogout = () => {
  return async ( dispatch: AppDispatch ) => {
    await logoutFirebase();
    dispatch( logout( { errorMessage: null } ) );
    dispatch( clearNoteLogout() );
  }
}