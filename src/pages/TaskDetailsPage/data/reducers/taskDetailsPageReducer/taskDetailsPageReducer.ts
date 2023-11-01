import { Reducer } from "typesafe-actions";
import { TaskDetailsReducerAction } from "./taskDetailsPageActions";
import {
  TaskDetailsPageInitialStateInterface,
  TaskDetailsPageReducerInitialState,
} from "./taskDetailsPageInitialState";

export const taskDetailsPageReducer: Reducer<
  TaskDetailsPageInitialStateInterface,
  TaskDetailsReducerAction
> = (
  state: TaskDetailsPageInitialStateInterface = TaskDetailsPageReducerInitialState,
  action: TaskDetailsReducerAction,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
