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
    setPhotosToActiveNote: ( state, action ) => {
      state.active.imageUrls = [...(state.active.imageUrls || []), ...action.payload ];
      state.isSaving = false;
    },
    clearNoteLogout: ( state ) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = {
        id: '',
        title: '',
        body: '',
        date: 0,
      };
    },
    deleteNoteById: ( state, action ) => {
      state.notes = state.notes.filter( note => note.id !== action.payload );
      state.active = {
        id: '',
        title: '',
        body: '',
        date: 0,
      };
    },
  },
});
export const {
  addNewEmptyNote,
  clearNoteLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions;