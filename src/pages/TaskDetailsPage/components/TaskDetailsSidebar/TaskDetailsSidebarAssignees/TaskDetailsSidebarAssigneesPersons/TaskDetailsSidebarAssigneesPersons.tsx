import { Dispatch, FC, SetStateAction } from "react";
import { TaskDetailsSidebarAssigneeModel } from "../../../../data/TaskDetailsSidebarModels";
import TaskDetailsSidebarAssigneesPerson from "./TaskDetailsSidebarAssigneesPerson";
import TaskDetailsSidebarAssigneesPersonsAddNew from "./TaskDetailsSidebarAssigneesPersonsAddNew/TaskDetailsSidebarAssigneesPersonsAddNew";

type Props = {
  assignees: TaskDetailsSidebarAssigneeModel[];
  setAssignees: Dispatch<SetStateAction<TaskDetailsSidebarAssigneeModel[]>>;
  setShowNewAssigneeDropdown: Dispatch<SetStateAction<boolean>>;
  showNewAssigneeDropdown: boolean;
};
const TaskDetailsSidebarAssigneesPersons: FC<Props> = ({
  assignees,
  setAssignees,
  setShowNewAssigneeDropdown,
  showNewAssigneeDropdown,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      {assignees.map((assignee) => (
        <TaskDetailsSidebarAssigneesPerson
          {...assignee}
          key={assignee.id}
          setAssignees={setAssignees}
        />
      ))}

      <TaskDetailsSidebarAssigneesPersonsAddNew
        assignees={assignees}
        setAssignees={setAssignees}
        setShowNewAssigneeDropdown={setShowNewAssigneeDropdown}
        showNewAssigneeDropdown={showNewAssigneeDropdown}
      />
    </div>
  );
};

export default TaskDetailsSidebarAssigneesPersons;
