import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { IPicture } from './interfaces';

export const selectPicture = (state: RootState): IPicture => state.picture;

export const pictureSelector = createSelector(selectPicture, state => state);
