import { AppDispatch } from "../store";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { RootState } from "@reduxjs/toolkit/query"
import { FiresbasDB } from "../../firebase";

export const startNewNote = () => {
  return async ( dispatch: AppDispatch, getState: () => RootState ) => {

    const { uid } = getState().auth.user;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc( collection( FiresbasDB, `${ uid }/journal/notes` )  );
    const setDocResp = await setDoc( newDoc, newNote );
    console.log({ newDoc, setDocResp });
  }
}