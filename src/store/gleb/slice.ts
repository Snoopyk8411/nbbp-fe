import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPicture } from './interfaces';

const initialState: IPicture = {
  copyright: '',
  date: new Date(),
  explanation: '',
  hdurl: '',
  media_type: '',
  service_version: '',
  title: '',
  url: '',
};

export const pictureSlice = createSlice({
  name: 'picture',
  initialState: initialState,
  reducers: {
    getPicture() {},
    setPicture(state, action: PayloadAction<IPicture>) {
      const pictureData = action.payload;
      return { ...state, ...pictureData };
    },
  },
});

export const { getPicture, setPicture } = pictureSlice.actions;

export default pictureSlice.reducer;
