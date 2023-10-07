import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { FC } from "react";
import { TaskDetailsSidebarPersonModel } from "../../../../pages/TaskDetailsPage/data/TaskDetailsSidebarModels";
import TaskDetailsSidebarNewPersonOptionTemplate from "./TaskDetailsSidebarNewPersonOptionTemplate";

type Props = {
  onChange: (event: DropdownChangeEvent) => void;
  options: TaskDetailsSidebarPersonModel[];
};
const TaskDetailsSidebarNewPerson: FC<Props> = ({ onChange, options }) => {
  return (
    <Dropdown
      onChange={onChange}
      options={options}
      optionLabel="name"
      placeholder="Select a person"
      filter
      className="mt-2 shadow-inner shadow-zinc-200"
      itemTemplate={(option: TaskDetailsSidebarPersonModel) => (
        <TaskDetailsSidebarNewPersonOptionTemplate option={option} />
      )}
    />
  );
};

export default TaskDetailsSidebarNewPerson;
