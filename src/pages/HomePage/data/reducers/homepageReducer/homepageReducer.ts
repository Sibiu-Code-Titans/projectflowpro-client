import { createSlice } from "@reduxjs/toolkit";
import { HOMEPAGE_REDUCER_ACTIONS } from "./homepageReducerActions";
import { HOMEPAGE_REDUCER_INITIAL_STATE } from "./homepageReducerInitialState";

export const homepageSlice = createSlice({
  name: "homepage",
  initialState: HOMEPAGE_REDUCER_INITIAL_STATE,
  reducers: HOMEPAGE_REDUCER_ACTIONS,
});

export const exampleActions = homepageSlice.actions;

export default homepageSlice.reducer;
