import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { homepageApi } from "../pages/HomePage/data/reducers/homepageReducer/homepageApi";
import { testApi } from "../pages/HomePage/data/reducers/homepageReducer/testApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([homepageApi.middleware, testApi.middleware]),
});

setupListeners(store.dispatch);
