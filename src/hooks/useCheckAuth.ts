import { FirebaseAuth } from "../firebase";
import { login, logout, useAppDispatch, useAppSelector } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useCheckAuth = () => {

  const { status } = useAppSelector( state => state.auth ); 
	const dispatch = useAppDispatch();

	useEffect(() => {
		
		onAuthStateChanged( FirebaseAuth, async ( user ) => {
			if ( !user ) return dispatch( logout( { errorMessage: null }) );

			const { uid, email, displayName, photoURL } = user;
			dispatch( login( { uid, email, displayName, photoURL } ) );
		});
		
	}, []);

  return {
    status,
  }
}