import { createSlice } from '@reduxjs/toolkit';

const storage = window.localStorage;

const initialState = {
  favoriteCount: Number(storage.getItem('favoriteCount')) || 0,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    ADD_TO_FAVORITE: (state) => {
      state.favoriteCount += 1;
    },
    CLEAR_FAVORITE: (state) => {
      state.favoriteCount = 0;
    },
  },
});

export const { ADD_TO_FAVORITE, CLEAR_FAVORITE } = favoriteSlice.actions;

export default favoriteSlice.reducer;
