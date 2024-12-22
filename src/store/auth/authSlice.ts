import { AuthState, initialState } from '../interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, action: PayloadAction<AuthState> ) => {
      state.status = 'authenticated';
      state.user = {
        ...action.payload,
        errorMessage: null,
      }
    },
    logout: ( state, action: PayloadAction<{ errorMessage: string | undefined}> ) => {
      state.status = 'not-authenticated';
      state.user.uid = null;
      state.user.email = null;
      state.user.displayName = null;
      state.user.photoURL = null;
      state.user.errorMessage = action.payload?.errorMessage || null;
    },
    checkingCredentials: ( state ) => {
      state.status = 'checking';
    }, 
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;