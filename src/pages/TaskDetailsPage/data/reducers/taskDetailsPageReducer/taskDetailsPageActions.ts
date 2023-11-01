import { ActionType, createAction } from "typesafe-actions";
import { TaskDetailsNavbarDto } from "../../models/TaskDetailsModels";

const actions = {
  getNavbarDataSuccess: createAction(
    "getNavbarDataSuccess",
    (payload: TaskDetailsNavbarDto) => payload,
  )(),
};

export type TaskDetailsReducerAction = ActionType<typeof actions>;
export const TaskDetailsReducerActions = actions;
