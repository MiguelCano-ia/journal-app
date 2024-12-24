type Status = 'checking' | 'not-authenticated' | 'authenticated';

export interface AuthState {
  uid?: string | null,
  email?: string | null,
  displayName?: string | null,
  photoURL?: string | null,
  errorMessage?: string | null,
};

export interface UserState {
  status: Status,
  user: AuthState,
};

export const initialState: UserState = {
  status: 'checking',
  user: {
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
};

export interface RegisterUser {
  email: string;
  password: string;
  displayName: string;
};

export interface LoginUser {
  email: string,
  password: string,
};