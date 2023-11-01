import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import TaskPersonImage from "../../../../../../common/components/Task/TaskPersonImage";
import { TaskDetailsActivityHistoryAssigneeModel } from "../../../../data/models/TaskDetailsActivityModels";

type Props = {
  from: TaskDetailsActivityHistoryAssigneeModel;
  to: TaskDetailsActivityHistoryAssigneeModel;
};
const TaskDetailsFooterActivityHistoryAssignee: FC<Props> = ({ to, from }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-2">
        <TaskPersonImage
          size="sm"
          name={from.name}
          src={from.src}
          url={from.url}
        />
        <div>{from.name}</div>
      </div>
      <FaLongArrowAltRight className="text-zinc-500" />
      <div className="flex items-center gap-x-2">
        <TaskPersonImage size="sm" name={to.name} src={to.src} url={to.url} />
        <div>{to.name}</div>
      </div>
    </div>
  );
};

export default TaskDetailsFooterActivityHistoryAssignee;
