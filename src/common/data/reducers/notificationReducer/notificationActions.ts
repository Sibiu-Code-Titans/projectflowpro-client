import { ActionType, createAction } from "typesafe-actions";
import { NotificationModel } from "../../models/NotificationModels";

const actions = {
  setNotification: createAction(
    "setNotification",
    (payload: NotificationModel) => payload,
  )(),
  clearNotification: createAction("clearNotification")(),
};

export type NotificationReducerAction = ActionType<typeof actions>;
export const NotificationReducerActions = actions;
