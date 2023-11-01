import { DropdownChangeEvent } from "primereact/dropdown";
import { useState } from "react";
import TaskDetailsSidebarAddNew from "../../../../common/components/Task/TaskDetailsSidebarNewPerson/TaskDetailsSidebarAddNew";
import TaskDetailsSidebarPersonsPreview from "../../../../common/components/Task/TaskDetailsSidebarPersonsPreview";
import { ALL_PERSONS } from "../../../../common/data/constants";
import { TaskDetailsSidebarPersonModel } from "../../data/models/TaskDetailsSidebarModels";

const TaskDetailsSidebarReportingTo = () => {
  const REPORTING_TO_PERSONS: TaskDetailsSidebarPersonModel[] = [
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw",
      name: "Bogdan Dimoiu",
    },
    {
      id: "2",
      image:
        "https://media.licdn.com/dms/image/D4E35AQGLfmRiXaiEdA/profile-framedphoto-shrink_800_800/0/1686831931072?e=1698696000&v=beta&t=EsfPqL3z9-fIY_HokVyvm_srcuCXWMoMLw8b959m8Ac",
      name: "Darius Rusu",
    },
  ];
  const [reportingToPersons, setReportingToPersons] =
    useState(REPORTING_TO_PERSONS);
  const [showNewPersonDropdown, setShowNewPersonDropdown] = useState(false);

  const unselectedReportingTo = ALL_PERSONS.filter(
    (person) =>
      !reportingToPersons.find((reportingTo) => reportingTo.id === person.id),
  );

  const addReportingPerson = (event: DropdownChangeEvent) => {
    setReportingToPersons((prev) => [...prev, event.target.value]);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-sm font-medium text-zinc-700">Reporting to</div>
      <TaskDetailsSidebarPersonsPreview assignedPersons={reportingToPersons} />
      <TaskDetailsSidebarAddNew
        addElement={addReportingPerson}
        addNewContent="reporting to"
        elements={reportingToPersons}
        setShowNewDropdown={setShowNewPersonDropdown}
        showNewDropdown={showNewPersonDropdown}
        unselectedElements={unselectedReportingTo}
      />
    </div>
  );
};

export default TaskDetailsSidebarReportingTo;
