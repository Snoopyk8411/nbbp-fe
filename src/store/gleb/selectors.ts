import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IMediaPage } from './interfaces';

const selectMedia = (state: RootState): IMediaPage => state.mediaPage;

export const mediaSelector = createSelector(selectMedia, state => state.media);
export const selectDate = createSelector(selectMedia, state => state.media.date);
export const selectNewDateFromDatePicker = createSelector(selectMedia, state => state.selectedDay);
export const selectIsLoading = createSelector(selectMedia, state => state.isLoading);
