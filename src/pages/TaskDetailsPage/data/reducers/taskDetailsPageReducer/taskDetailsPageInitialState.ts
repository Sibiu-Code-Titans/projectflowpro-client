import { TaskDetailsNavbarDto } from "../../models/TaskDetailsModels";

export interface TaskDetailsPageInitialStateInterface {
  taskDetailsNavbar: TaskDetailsNavbarDto | undefined;
}

export const TaskDetailsPageReducerInitialState: Readonly<TaskDetailsPageInitialStateInterface> =
  {
    taskDetailsNavbar: undefined,
  };
