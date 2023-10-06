import { Reducer, getType } from "typesafe-actions";
import {
  HomepageReducerAction,
  HomepageReducerActions,
} from "./homepageReducerActions";
import {
  HomepageInitialStateInterface,
  HomepageReducerInitialState,
} from "./homepageReducerInitialState";

export const homepageReducer: Reducer<
  HomepageInitialStateInterface,
  HomepageReducerAction
> = (
  state: HomepageInitialStateInterface = HomepageReducerInitialState,
  action: HomepageReducerAction
) => {
  switch (action.type) {
    case getType(HomepageReducerActions.setData):
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
