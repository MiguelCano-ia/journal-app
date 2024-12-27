import { createSlice, Payload } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
      counter: 10
  },
  reducers: {
    addNewEmptyNote: ( state, action ) => {

    },
    setActiveNote: ( state, action ) => {
        
    },
    setNotes: ( state, action ) => {
          
    },
    setSaving: ( state ) => {

    },
    updateNote: ( state, action ) => {
          
    },
    deleteNodeById: ( state, action ) => {

    },
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
} = journalSlice.actions;