// src/store/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  emptyName: '',
  emptyWebsite: '',
  emailDirty: false,
  emptyNameDirty: false,
  emptyWebsiteDirty: false,
  emailError: 'Email cannot be empty',
  emptyNameError: 'The field cannot be empty',
  emptyWebsiteError: 'The field cannot be empty',
  formValid: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEmptyName: (state, action) => {
      state.emptyName = action.payload;
    },
    setEmptyWebsite: (state, action) => {
      state.emptyWebsite = action.payload;
    },
    setEmailDirty: (state, action) => {
      state.emailDirty = action.payload;
    },
    setEmptyNameDirty: (state, action) => {
      state.emptyNameDirty = action.payload;
    },
    setEmptyWebsiteDirty: (state, action) => {
      state.emptyWebsiteDirty = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },
    setEmptyNameError: (state, action) => {
      state.emptyNameError = action.payload;
    },
    setEmptyWebsiteError: (state, action) => {
      state.emptyWebsiteError = action.payload;
    },
    setFormValid: (state, action) => {
      state.formValid = action.payload;
    },
  },
});

export const {
  setEmail,
  setEmptyName,
  setEmptyWebsite,
  setEmailDirty,
  setEmptyNameDirty,
  setEmptyWebsiteDirty,
  setEmailError,
  setEmptyNameError,
  setEmptyWebsiteError,
  setFormValid,
} = formSlice.actions;

export default formSlice.reducer;
