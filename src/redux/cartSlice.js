import { createSlice } from '@reduxjs/toolkit';

const storage = window.localStorage;

const initialState = {
  cartItemsCount: Number(storage.getItem('cartCount')) || 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state) => {
      state.cartItemsCount += 1;
    },
    CLEAR_CART: (state) => {
      state.cartItemsCount = 0;
    },
  },
});

export const { ADD_TO_CART, CLEAR_CART } = cartSlice.actions;

export default cartSlice.reducer;
