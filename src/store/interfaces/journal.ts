export interface Note {
  id: string,
  title: string,
  body: string,
  date: number,
  imageUrls?: string[],
};

interface JournalState {
  isSaving: boolean,
  messageSaved: string,
  notes: Note[],
  active: Note,
};

export const initialState: JournalState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: {
    id: '',
    title: '',
    body: '',
    date: 0,
    imageUrls: [],
  },
};