import { loginUser, registerUser, signInWithGoogle } from "../../firebase/providers";
import { LoginUser, RegisterUser } from "../interfaces";
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

    const { ok, uid, photoURL, errorMessage } = await registerUser({ email, password, displayName });

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ email, displayName, photoURL, uid }) ); 
  }
}

export const startLoginUser = ( { email, password, displayName }: LoginUser ) => {
  return async ( dispatch: AppDispatch ) => {
    dispatch( checkingCredentials() );

    const { ok, uid, photoURL, errorMessage } = await loginUser({ email, password });

    if ( !ok ) return dispatch( logout( { errorMessage } ) );

    dispatch( login( { uid, email, displayName, photoURL } ) )
  }
}