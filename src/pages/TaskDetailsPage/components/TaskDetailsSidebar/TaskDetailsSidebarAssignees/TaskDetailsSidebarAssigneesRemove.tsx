import { Dispatch, FC, SetStateAction } from "react";
import { FaMinus } from "react-icons/fa";
import { TaskDetailsSidebarAssigneeModel } from "../../../data/TaskDetailsSidebarModels";

type Props = {
  assignees: TaskDetailsSidebarAssigneeModel[];
  setAssignees: Dispatch<SetStateAction<TaskDetailsSidebarAssigneeModel[]>>;
};
const TaskDetailsSidebarAssigneesRemove: FC<Props> = ({
  assignees,
  setAssignees,
}) => {
  const handleRemove = () => {
    const existingSelectedAssignees = assignees.filter(
      (assignee) => assignee.isSelected,
    ).length;

    let filteredAssignees: TaskDetailsSidebarAssigneeModel[] = [];
    if (existingSelectedAssignees) {
      filteredAssignees = assignees.filter(
        (assignee) => assignee.isSelected === false,
      );
    } else {
      filteredAssignees = assignees.slice(0, -1);
    }

    setAssignees(filteredAssignees);
  };

  return (
    <div className="flex items-center gap-x-4">
      {assignees.length ? (
        <FaMinus
          className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95"
          onClick={handleRemove}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskDetailsSidebarAssigneesRemove;
