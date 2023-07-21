import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = moviesSlice.actions;
export default moviesSlice.reducer;
