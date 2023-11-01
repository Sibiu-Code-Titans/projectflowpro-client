import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import TaskStatusBadge from "../../../../../../common/components/Task/TaskStatusBadge";
import { TaskStatusModel } from "../../../../../../common/data/models/TaskModels";

type Props = {
  from: TaskStatusModel;
  to: TaskStatusModel;
};
const TaskDetailsFooterActivityHistoryStatus: FC<Props> = ({ from, to }) => {
  return (
    <div className="flex items-center gap-x-4">
      <TaskStatusBadge size="sm" status={from} />
      <FaLongArrowAltRight className="text-zinc-500" />
      <TaskStatusBadge size="sm" status={to} />
    </div>
  );
};

export default TaskDetailsFooterActivityHistoryStatus;
