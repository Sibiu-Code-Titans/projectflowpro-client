export enum TaskDetailsActivityHistoryField {
  status,
  assignee,
  priority,
  storyPoints,
  other,
}

export type TaskDetailsActivityHistoryAssigneeModel = {
  name: string;
  src: string;
  url: string;
};
