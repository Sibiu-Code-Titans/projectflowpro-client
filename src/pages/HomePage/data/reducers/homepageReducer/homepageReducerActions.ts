import { ActionType, createAction } from "typesafe-actions";

const actions = {
  setData: createAction("setData", (payload: any) => payload)(),
};

export type HomepageReducerAction = ActionType<typeof actions>;
export const HomepageReducerActions = actions;
