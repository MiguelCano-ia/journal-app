import { collection, getDocs } from "firebase/firestore/lite";
import { FiresbasDB } from "../firebase";
import { Note } from "../store/interfaces";

export const loadNotes = async ( uid: string ) => {

  if ( !uid ) throw new Error( 'uid not exist' );

  const collectionRef = collection( FiresbasDB, `${ uid }/journal/notes` );
  const docs = await getDocs( collectionRef );

  const notes: Note[] = [];

  docs.forEach( doc => {
    notes.push({
      ...(doc.data() as Note)
    });
  });

  return notes;
}