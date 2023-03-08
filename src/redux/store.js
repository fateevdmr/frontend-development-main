import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import favoriteSlice from './favoriteSlice';
import logger from './middlewares/logger';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
  },
  middleware: [logger],
});
