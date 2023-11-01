import { Reducer, getType } from "typesafe-actions";
import {
  NotificationReducerAction,
  NotificationReducerActions,
} from "./notificationActions";
import {
  NotificationInitialStateInterface,
  NotificationReducerInitialState,
} from "./notificationInitialState";

export const notificationReducer: Reducer<
  NotificationInitialStateInterface,
  NotificationReducerAction
> = (
  state: NotificationInitialStateInterface = NotificationReducerInitialState,
  action: NotificationReducerAction,
) => {
  switch (action.type) {
    case getType(NotificationReducerActions.setNotification):
      return {
        ...state,
        notificationData: action.payload,
      };
    case getType(NotificationReducerActions.clearNotification):
      return {
        ...state,
        notificationData: undefined,
      };

    default:
      return state;
  }
};
