interface Active {
  id: string,
  title: string,
  body: string,
  date: number,
  imageUrls: string[],
};

interface JournalState {
  isSaving: boolean,
  messageSaved: string,
  notes: string[],
};