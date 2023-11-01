import { TaskDetailsFooterActivityViews } from "./models/TaskDetailsFooterModels";

export const parseViewEnum = (view: TaskDetailsFooterActivityViews) => {
  switch (view) {
    case TaskDetailsFooterActivityViews.comments:
      return "Comments";
    case TaskDetailsFooterActivityViews.all:
      return "All";
    case TaskDetailsFooterActivityViews.history:
      return "History";
    case TaskDetailsFooterActivityViews.workLog:
      return "Work Log";
  }
};
