import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { taskDetailsPageApi } from "../pages/TaskDetailsPage/data/reducers/taskDetailsPageReducer/taskDetailsPageApi";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([taskDetailsPageApi.middleware]),
});

setupListeners(store.dispatch);
