import { registerUser, signInWithGoogle } from "../../firebase/providers";
import { RegisterUser } from "../interfaces";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./";

export const checkingAuth = ( email, password ) => {
  return async ( dispatch: AppDispatch ) => {
    dispatch( checkingCredentials() );
  }
}

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

    const resp = await registerUser({ email, password, displayName });
    console.log( resp);
  }
}