import { DropdownChangeEvent } from "primereact/dropdown";
import { Dispatch, FC, SetStateAction } from "react";
import TaskDetailsSidebarAssigneesNewPerson from "../../../../../../../common/components/Task/TaskDetailsSidebarNewPerson/TaskDetailsSidebarNewPerson";
import {
  TaskDetailsSidebarAssigneeModel,
  TaskDetailsSidebarPersonModel,
} from "../../../../../data/TaskDetailsSidebarModels";
import TaskDetailsSidebarAssigneesPersonsAddNewActions from "./TaskDetailsSidebarAssigneesPersonsAddNewActions";

type Props = {
  assignees: TaskDetailsSidebarAssigneeModel[];
  setAssignees: Dispatch<SetStateAction<TaskDetailsSidebarAssigneeModel[]>>;
  setShowNewAssigneeDropdown: Dispatch<SetStateAction<boolean>>;
  showNewAssigneeDropdown: boolean;
};
const TaskDetailsSidebarAssigneesPersonsAddNew: FC<Props> = ({
  assignees,
  setAssignees,
  showNewAssigneeDropdown,
  setShowNewAssigneeDropdown,
}) => {
  const PERSONS: TaskDetailsSidebarPersonModel[] = [
    {
      id: "4",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFHaxDTCNnEXQ/profile-displayphoto-shrink_800_800/0/1685466156795?e=1701907200&v=beta&t=fGAsu5L4sMJ4N9aks4ZKS5_D3fYZsQ-Ffh75-PfSiEw",
      name: "Stelian Gheorghe",
    },
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw",
      name: "Bogdan Dimoiu",
    },
    {
      id: "2",
      image:
        "https://media.licdn.com/dms/image/D4E35AQGLfmRiXaiEdA/profile-framedphoto-shrink_800_800/0/1686831931072?e=1697274000&v=beta&t=dG6zD9fn4N0UgyHSYYzyd6kEk3LcQUZB0liQ6oxg1_Y",
      name: "Darius Rusu",
    },
    {
      id: "5",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFxieSDkBgAgw/profile-displayphoto-shrink_800_800/0/1688561842943?e=1701907200&v=beta&t=3yiTPnlUQmuUi_mJHybCD_Bo6-EsWx1xo8KMt_2cKv0",
      name: "Daniel Ilie",
    },
    {
      id: "3",
      image:
        "https://media.licdn.com/dms/image/D4E03AQHH85ODHCh_-Q/profile-displayphoto-shrink_800_800/0/1671533097756?e=1701907200&v=beta&t=vgXDw-_SzFvQGYzL6nnGlN6OWQk32L3_Ll4Sjsamprs",
      name: "Iulian Curelea",
    },
  ];

  const unselectedPersons = PERSONS.filter(
    (person) => !assignees.find((assignee) => assignee.id === person.id),
  );

  const addAssignee = (event: DropdownChangeEvent) => {
    setAssignees((prev) => [
      ...prev,
      { isSelected: false, ...event.target.value },
    ]);
  };

  const handleShowNewAssigneeDropdown = () => {
    setShowNewAssigneeDropdown((prev) => !prev);
  };

  const noAssignees = assignees.length === 0;

  return (
    <>
      {showNewAssigneeDropdown || noAssignees ? (
        <TaskDetailsSidebarAssigneesNewPerson
          options={unselectedPersons}
          onChange={addAssignee}
        />
      ) : (
        <></>
      )}
      <div
        className="flex cursor-pointer items-center gap-x-1 text-sm text-zinc-600 transition-all hover:text-zinc-700 active:scale-95"
        onClick={handleShowNewAssigneeDropdown}
      >
        <TaskDetailsSidebarAssigneesPersonsAddNewActions
          noAssignees={noAssignees}
          showNewAssigneeDropdown={showNewAssigneeDropdown}
        />
      </div>
    </>
  );
};

export default TaskDetailsSidebarAssigneesPersonsAddNew;
