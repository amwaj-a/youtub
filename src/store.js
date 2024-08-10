//store.jsx
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/LogInSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,

  },
});
