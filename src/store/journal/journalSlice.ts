import { initialState, Note } from './../interfaces/journal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: ( state, action: PayloadAction<Note> ) => {
      state.notes.push( action.payload );
    },
    setActiveNote: ( state, action: PayloadAction<Note> ) => {
      state.active = action.payload;
      state.isSaving = false;
      state.messageSaved = '';
    },
    setNotes: ( state, action: PayloadAction<Note[]> ) => {
      state.notes = action.payload;
    },
    setSaving: ( state ) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: ( state, action ) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => {

        if ( note.id === action.payload.id ) {
          return action.payload;
        }

        return note;
      });

      state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
    },
    deleteNodeById: ( state, action ) => {

    },
  },
});
export const {
  addNewEmptyNote,
  deleteNodeById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;