import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import TaskPriorityIcon from "../../../../../../common/components/Task/TaskPriorityIcon";
import { TaskPriorityEnum } from "../../../../../../common/data/models/TaskModels";
import { getTaskPriorityLabel } from "../../../../../../common/data/utils";

type Props = {
  from: TaskPriorityEnum;
  to: TaskPriorityEnum;
};
const TaskDetailsFooterActivityHistoryPriority: FC<Props> = ({ from, to }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-2">
        <TaskPriorityIcon priority={from} />
        <div>{getTaskPriorityLabel(from)}</div>
      </div>
      <FaLongArrowAltRight className="text-zinc-500" />
      <div className="flex items-center gap-x-2">
        <TaskPriorityIcon priority={to} />
        <div>{getTaskPriorityLabel(to)}</div>
      </div>
    </div>
  );
};

export default TaskDetailsFooterActivityHistoryPriority;
