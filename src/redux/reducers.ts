import { combineReducers } from "@reduxjs/toolkit";
import { StateType } from "typesafe-actions";
import { homepageApi } from "../pages/HomePage/data/reducers/homepageReducer/homepageApi";
import { HomepageReducerAction } from "../pages/HomePage/data/reducers/homepageReducer/homepageReducerActions";
import { testApi } from "../pages/HomePage/data/reducers/homepageReducer/testApi";
import { homepageReducer } from "./../pages/HomePage/data/reducers/homepageReducer/homepageReducer";

const reducers = {
  homepageReducer,
  [homepageApi.reducerPath]: homepageApi.reducer,
  [testApi.reducerPath]: testApi.reducer,
};

export const rootReducer = combineReducers(reducers);
export type RootState = StateType<typeof rootReducer>;
export type RootAction = HomepageReducerAction;
