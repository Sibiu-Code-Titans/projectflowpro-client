import { FC } from "react";
import {
  BiSolidChevronDown,
  BiSolidChevronUp,
  BiSolidChevronsDown,
  BiSolidChevronsUp,
} from "react-icons/bi";
import { FaEquals } from "react-icons/fa";
import { TaskPriorityEnum } from "../../data/models/TaskModels";

type Props = {
  priority: TaskPriorityEnum;
};
const TaskPriorityIcon: FC<Props> = ({ priority }) => {
  return (
    <div className="text-xl">
      {priority === TaskPriorityEnum.highest ? (
        <BiSolidChevronsUp className="text-red-600" />
      ) : priority === TaskPriorityEnum.high ? (
        <BiSolidChevronUp className="text-red-500" />
      ) : priority === TaskPriorityEnum.low ? (
        <BiSolidChevronDown className="text-sky-500" />
      ) : priority === TaskPriorityEnum.lowest ? (
        <BiSolidChevronsDown className="text-sky-600" />
      ) : (
        <FaEquals className="text-sm text-orange-500" />
      )}
    </div>
  );
};

export default TaskPriorityIcon;
