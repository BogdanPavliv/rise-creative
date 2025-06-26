import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/others'

const initialState: FormState = {
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
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEmptyName: (state, action: PayloadAction<string>) => {
      state.emptyName = action.payload;
    },
    setEmptyWebsite: (state, action: PayloadAction<string>) => {
      state.emptyWebsite = action.payload;
    },
    setEmailDirty: (state, action: PayloadAction<boolean>) => {
      state.emailDirty = action.payload;
    },
    setEmptyNameDirty: (state, action: PayloadAction<boolean>) => {
      state.emptyNameDirty = action.payload;
    },
    setEmptyWebsiteDirty: (state, action: PayloadAction<boolean>) => {
      state.emptyWebsiteDirty = action.payload;
    },
    setEmailError: (state, action: PayloadAction<string>) => {
      state.emailError = action.payload;
    },
    setEmptyNameError: (state, action: PayloadAction<string>) => {
      state.emptyNameError = action.payload;
    },
    setEmptyWebsiteError: (state, action: PayloadAction<string>) => {
      state.emptyWebsiteError = action.payload;
    },
    setFormValid: (state, action: PayloadAction<boolean>) => {
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
