import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShop } from './interfaces';

const initialState: IShop = {
  isSearch: false,
  isModal: false,
};

export const shopSlice = createSlice({
  name: 'Shop',
  initialState: initialState,
  reducers: {
    setIsSearch: (state, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
    setIsModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload;
    },
  },
});
export const { setIsSearch, setIsModal } = shopSlice.actions;
export default shopSlice.reducer;
