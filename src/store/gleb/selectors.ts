import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';

const selectPicture = (state: RootState) => state.picturePage.picture;
const selectDateFromDatePicker = (state: RootState) => state.picturePage.selectedDay;

export const pictureSelector = createSelector(selectPicture, state => state);
export const selectDate = createSelector(selectPicture, state => state.date);
export const selectNewDateFromDatePicker = createSelector(selectDateFromDatePicker, state => state);
