export type TaskDetailsSidebarAssigneeModel = {
  isSelected: boolean;
} & TaskDetailsSidebarPersonModel;

export type TaskDetailsSidebarPersonModel = {
  id: string;
  image: string;
  name: string;
};

export type TaskDetailsSidebarTagModel = {
  id: string;
  name: string;
  color: string;
};
