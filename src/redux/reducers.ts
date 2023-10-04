import { combineReducers } from "@reduxjs/toolkit";
import { StateType } from "typesafe-actions";
import { HomepageReducerAction } from "../pages/HomePage/data/reducers/homepageReducer/homepageReducerActions";
import { homepageReducer } from "./../pages/HomePage/data/reducers/homepageReducer/homepageReducer";

const reducers = {
  homepageReducer,
};

export const rootReducer = combineReducers(reducers);
export type RootState = StateType<typeof rootReducer>;
export type RootAction = HomepageReducerAction;
