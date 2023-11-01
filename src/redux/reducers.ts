import { combineReducers } from "@reduxjs/toolkit";
import { StateType } from "typesafe-actions";
import { taskDetailsPageApi } from "../pages/TaskDetailsPage/data/reducers/taskDetailsPageReducer/taskDetailsPageApi";
import { notificationReducer } from "./../common/data/reducers/notificationReducer/notificationReducer";
import { taskDetailsPageReducer } from "./../pages/TaskDetailsPage/data/reducers/taskDetailsPageReducer/taskDetailsPageReducer";

const reducers = {
  taskDetailsPageReducer,
  notificationReducer,
  [taskDetailsPageApi.reducerPath]: taskDetailsPageApi.reducer,
};

export const rootReducer = combineReducers(reducers);
export type RootState = StateType<typeof rootReducer>;
