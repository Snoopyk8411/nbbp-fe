import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPhoto } from 'layout/contributors/ivanefimov/interfaces';

export interface IGalleryPageData {
  error: Error | null;
  isLoading: boolean;
  photos: IPhoto[];
  page: number;
  hasMore: boolean;
}

const initialState: IGalleryPageData = {
  error: null,
  isLoading: false,
  photos: [],
  page: 2,
  hasMore: true,
};

export const galleryPageSlice = createSlice({
  name: 'galleryPage',
  initialState: initialState,
  reducers: {
    fetchPage: (state, _action: PayloadAction<void>) => {
      return state;
    },

    addPage: (state, action: PayloadAction<IPhoto[]>) => {
      state.photos.push(...action.payload);
    },

    setNextPage: (state, _action: PayloadAction<void>) => {
      state.page += 1;
    },

    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },

    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions } = galleryPageSlice;
