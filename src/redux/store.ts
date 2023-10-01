import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../pages/HomePage/data/reducers/homepageReducer/homepageReducer";

export const store = configureStore({
  reducer: {
    homepageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
