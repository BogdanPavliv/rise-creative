// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    form: formReducer,
  },
});

export default store;
