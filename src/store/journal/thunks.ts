import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { AppDispatch } from "../store";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FiresbasDB } from "../../firebase";
import { RootState } from "@reduxjs/toolkit/query"
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async ( dispatch: AppDispatch, getState: () => RootState ) => {

    dispatch( savingNewNote() );

    const { uid } = getState().auth.user;
    
    const newDoc = doc( collection( FiresbasDB, `${ uid }/journal/notes` )  );
    const newNote = {
      id: newDoc.id,
      title: '',
      body: '',
      date: new Date().getTime(),
    }
    await setDoc( newDoc, newNote );
    
    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );
  }
}

export const startLoadingNotes = () => {
  return async ( dispatch: AppDispatch, getState: () => RootState ) => {
    
    const { uid } = getState().auth.user;
    if ( !uid ) throw new Error( 'uid not exist' );

    const notes = await loadNotes( uid );
    dispatch( setNotes( notes ) )
  }
}

export const startSaveNote = () => {
  return async ( dispatch: AppDispatch, getState: () => RootState ) => {

    dispatch( setSaving() );

    const { uid } = getState().auth.user;
    const { active: note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc( FiresbasDB, `${ uid }/journal/notes/${ note.id }` );
    await setDoc( docRef, noteToFireStore, { merge: true } );

    dispatch( updateNote( note ));
  }
}