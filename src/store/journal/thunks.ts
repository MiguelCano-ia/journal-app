import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { AppDispatch } from "../store";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { fileUpload, loadNotes } from "../../helpers";
import { FiresbasDB } from "../../firebase";
import { RootState } from "../../store";

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
};

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

    const docRef = doc( FiresbasDB, `${ uid }/journal/notes/${ note.id }` );
    await setDoc( docRef, noteToFireStore, { merge: true } );

    dispatch( updateNote( note ));
  }
}

export const startUploadingFiles = ( files: FileList ) => {
  return async ( dispatch: AppDispatch ) => {

    dispatch( setSaving() );

    //Almacena las promesas
    const fileUploadPromises = [];
    for ( const file of files ) {
      fileUploadPromises.push( fileUpload( file ));
    }
    // Resolvemos promesas de manera simultanea
    const uploadFiles = await Promise.all( fileUploadPromises );
    const photosUrls = uploadFiles.map( file => file.secure_url );

    dispatch( setPhotosToActiveNote( photosUrls ));
  }
}

export const startDeletingNote = () => {
  return async ( dispatch: AppDispatch, getState: () => RootState ) => {

    const { uid } = getState().auth.user;
    const { active: note } = getState().journal;

    const docRef = doc( FiresbasDB, `${ uid }/journal/notes/${ note.id }`);
    await deleteDoc( docRef );

    dispatch( deleteNoteById( note.id ));
  }
}