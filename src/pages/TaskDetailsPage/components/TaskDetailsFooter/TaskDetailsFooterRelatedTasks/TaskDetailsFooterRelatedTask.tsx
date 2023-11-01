import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import TaskPersonImage from "../../../../../common/components/Task/TaskPersonImage";
import TaskPriorityIcon from "../../../../../common/components/Task/TaskPriorityIcon";
import TaskStatusBadge from "../../../../../common/components/Task/TaskStatusBadge";
import {
  TaskPriorityEnum,
  TaskStatusModel,
} from "../../../../../common/data/models/TaskModels";

type Props = {
  assignedUser: string;
  id: string;
  priority: TaskPriorityEnum;
  status: TaskStatusModel;
  title: string;
};
const TaskDetailsFooterRelatedTask: FC<Props> = ({
  assignedUser,
  id,
  priority,
  status,
  title,
}) => {
  const removeTask = () => {};

  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-md border-1 px-3 py-1 text-sm font-medium opacity-75 shadow-sm shadow-zinc-200 transition-all hover:bg-zinc-100 hover:opacity-100 hover:shadow-md">
      <div className="flex items-center gap-x-6">
        <div className="text-purple-500">{id}</div>
        <div className="max-w-[30ch] truncate group-hover:underline">
          {title}
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-3">
          <TaskPriorityIcon priority={priority} />
          <TaskPersonImage size="sm" name="" url="" src={assignedUser} />
          <TaskStatusBadge size="sm" status={status} />
        </div>
        <FaTimes
          onClick={removeTask}
          className="text-xl text-zinc-700 opacity-0 transition-all hover:scale-105 active:scale-95 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default TaskDetailsFooterRelatedTask;
