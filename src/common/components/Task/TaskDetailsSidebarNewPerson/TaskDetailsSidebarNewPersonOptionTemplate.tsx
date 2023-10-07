import { FC } from "react";
import { TaskDetailsSidebarPersonModel } from "../../../../pages/TaskDetailsPage/data/TaskDetailsSidebarModels";

type Props = {
  option: TaskDetailsSidebarPersonModel;
};
const TaskDetailsSidebarNewPersonOptionTemplate: FC<Props> = ({ option }) => {
  return (
    <div className="flex items-center text-sm">
      <img
        alt={option.name}
        src={option.image}
        className="mr-2 h-8 w-8 rounded-full"
      />
      <div className="text-zinc-700">{option.name}</div>
    </div>
  );
};

export default TaskDetailsSidebarNewPersonOptionTemplate;
