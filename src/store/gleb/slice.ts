import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMediaPage, IMedia } from './interfaces';
import { formattedDate, todayTimestamp } from './helpers';

const initialState: IMediaPage = {
  media: {
    copyright: '',
    date: formattedDate,
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  },
  error: null,
  selectedDay: todayTimestamp,
  isLoading: false,
};

export const mediaSlice = createSlice({
  name: 'MediaPage',
  initialState: initialState,
  reducers: {
    getMedia(state, action: PayloadAction<string>) {
      state.media.date = action.payload;
    },
    setMedia(state, action: PayloadAction<IMedia>) {
      state.media = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setData(state, action: PayloadAction<String>) {
      state.selectedDay = action.payload;
    },
  },
});
export const { getMedia, setMedia, setData, setError, setIsLoading } = mediaSlice.actions;
export default mediaSlice.reducer;
