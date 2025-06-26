import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
