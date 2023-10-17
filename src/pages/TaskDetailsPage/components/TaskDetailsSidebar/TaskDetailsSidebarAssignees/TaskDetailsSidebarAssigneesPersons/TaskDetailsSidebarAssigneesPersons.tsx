import { DropdownChangeEvent } from "primereact/dropdown";
import { Dispatch, FC, SetStateAction } from "react";
import TaskDetailsSidebarAddNew from "../../../../../../common/components/Task/TaskDetailsSidebarNewPerson/TaskDetailsSidebarAddNew";
import { ALL_PERSONS } from "../../../../../../common/data/constants";
import { TaskDetailsSidebarAssigneeModel } from "../../../../data/models/TaskDetailsSidebarModels";
import TaskDetailsSidebarAssigneesPerson from "./TaskDetailsSidebarAssigneesPerson";

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
  const unselectedAssignees = ALL_PERSONS.filter(
    (person) => !assignees.find((assignee) => assignee.id === person.id),
  );

  const addAssignee = (event: DropdownChangeEvent) => {
    setAssignees((prev) => [
      ...prev,
      { isSelected: false, ...event.target.value },
    ]);
  };

  return (
    <div className="flex flex-col gap-y-2">
      {assignees.map((assignee) => (
        <TaskDetailsSidebarAssigneesPerson
          {...assignee}
          key={assignee.id}
          setAssignees={setAssignees}
        />
      ))}

      <TaskDetailsSidebarAddNew
        elements={assignees}
        addElement={addAssignee}
        setShowNewDropdown={setShowNewAssigneeDropdown}
        showNewDropdown={showNewAssigneeDropdown}
        addNewContent="assignee"
        unselectedElements={unselectedAssignees}
      />
    </div>
  );
};

export default TaskDetailsSidebarAssigneesPersons;
