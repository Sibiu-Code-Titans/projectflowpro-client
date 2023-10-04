import { ActionType, createAction } from "typesafe-actions";

const actions = {
  incrementCounter: createAction(
    "incrementCounter",
    (payload: number) => payload
  )(),
};

export type HomepageReducerAction = ActionType<typeof actions>;
export const HomepageReducerActions = actions;
