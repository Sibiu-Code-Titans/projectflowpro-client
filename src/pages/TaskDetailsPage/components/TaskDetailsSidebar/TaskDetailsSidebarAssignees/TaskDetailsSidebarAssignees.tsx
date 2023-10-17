import { useState } from "react";
import { TaskDetailsSidebarAssigneeModel } from "../../../data/models/TaskDetailsSidebarModels";
import TaskDetailsSidebarAssigneesPersons from "./TaskDetailsSidebarAssigneesPersons/TaskDetailsSidebarAssigneesPersons";
import TaskDetailsSidebarAssigneesRemove from "./TaskDetailsSidebarAssigneesRemove";

const TaskDetailsSidebarAssignees = () => {
  const AVAILABLE_ASSIGNEES: TaskDetailsSidebarAssigneeModel[] = [
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw",
      name: "Bogdan D.",
      isSelected: true,
    },
    {
      id: "2",
      image:
        "https://media.licdn.com/dms/image/D4E35AQGLfmRiXaiEdA/profile-framedphoto-shrink_800_800/0/1686831931072?e=1697965200&v=beta&t=F2olugojRgUIzFGy-t3eDnAkzB-XEvXhU7u3r9-SDiE",
      name: "Darius R.",
      isSelected: false,
    },
  ];
  const [assignees, setAssignees] = useState(AVAILABLE_ASSIGNEES);
  const [showNewAssigneeDropdown, setShowNewAssigneeDropdown] = useState(false);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-medium text-zinc-700">Assignees</div>
        <TaskDetailsSidebarAssigneesRemove
          assignees={assignees}
          setAssignees={setAssignees}
        />
      </div>
      <TaskDetailsSidebarAssigneesPersons
        assignees={assignees}
        setAssignees={setAssignees}
        showNewAssigneeDropdown={showNewAssigneeDropdown}
        setShowNewAssigneeDropdown={setShowNewAssigneeDropdown}
      />
    </div>
  );
};

export default TaskDetailsSidebarAssignees;
