import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { FC } from "react";
import TaskDetailsSidebarNewOptionTemplate from "./TaskDetailsSidebarNewOptionTemplate";

type Props = {
  addNewContent: string;
  onChange: (event: DropdownChangeEvent) => void;
  options: any[];
};
const TaskDetailsSidebarNewElement: FC<Props> = ({
  addNewContent,
  onChange,
  options,
}) => {
  return (
    <Dropdown
      onChange={onChange}
      options={options}
      optionLabel="name"
      placeholder={`Select ${addNewContent}`}
      filter
      className="mt-2 w-full shadow-inner shadow-zinc-200"
      itemTemplate={(option) => (
        <TaskDetailsSidebarNewOptionTemplate option={option} />
      )}
    />
  );
};

export default TaskDetailsSidebarNewElement;
