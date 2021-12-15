import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShop } from './interfaces';

const initialState: IShop = {
  isSearch: false,
  isModalOpen: false,
};

export const shopSlice = createSlice({
  name: 'Shop',
  initialState: initialState,
  reducers: {
    setIsSearchUsed: (state, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});
export const { setIsSearchUsed, setIsModalOpen } = shopSlice.actions;
export default shopSlice.reducer;
