import { createSlice } from '@reduxjs/toolkit';
import { MenuState } from '../types/others'

const initialState: MenuState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
