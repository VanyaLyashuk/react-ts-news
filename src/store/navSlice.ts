import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface NavState {
  isOpened: boolean;
  categories: string[]
}

const initialState: NavState = {
  isOpened: false,
  categories: [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]
}

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleNav(state) {
      state.isOpened = !state.isOpened
    }
  }
});

export const {toggleNav} = navSlice.actions;

export default navSlice.reducer;