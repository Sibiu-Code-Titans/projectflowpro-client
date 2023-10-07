import { FC } from "react";
import { FaBan, FaPlus } from "react-icons/fa";

type Props = {
  noAssignees: boolean;
  showNewAssigneeDropdown: boolean;
};
const TaskDetailsSidebarAssigneesPersonsAddNewActions: FC<Props> = ({
  noAssignees,
  showNewAssigneeDropdown,
}) => {
  if (showNewAssigneeDropdown && !noAssignees) {
    return (
      <>
        <FaBan className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95" />
        <span>Close</span>
      </>
    );
  }

  if (!noAssignees)
    return (
      <>
        <FaPlus className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95" />
        <span>Add assignee</span>
      </>
    );

  return <></>;
};

export default TaskDetailsSidebarAssigneesPersonsAddNewActions;
