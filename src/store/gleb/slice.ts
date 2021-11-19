import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { IPicturePage, IPicture } from './interfaces';
import { date, todayTimestamp } from './helpers';

const initialState: IPicturePage = {
  picture: {
    copyright: '',
    date: date.toISOString().slice(0, 10),
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  },
  error: null,
  selectedDay: todayTimestamp,
};

export const pictureSlice = createSlice({
  name: 'picturePage',
  initialState: initialState,
  reducers: {
    getPicture(state, action: PayloadAction<string>) {
      state.picture.date = action.payload;
    },
    setPicture(state, action: PayloadAction<IPicture>) {
      state.picture = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData(state, action: PayloadAction<String>) {
      state.selectedDay = action.payload;
    },
  },
});
export const { getPicture, setPicture, setData, setError } = pictureSlice.actions;
export default pictureSlice.reducer;
