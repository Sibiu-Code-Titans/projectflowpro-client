import { useState } from "react";
import TaskDetailsSidebarPersonsPreview from "../../../../../common/components/Task/TaskDetailsSidebarPersonsPreview";
import { TaskDetailsSidebarPersonModel } from "../../../data/TaskDetailsSidebarModels";
import TaskDetailsSidebarSubscribedAction from "./TaskDetailsSidebarSubscribedAction";

const TaskDetailsSidebarSubscribed = () => {
  const SUBSCRIBED_PERSONS: TaskDetailsSidebarPersonModel[] = [
    {
      id: "1",
      image:
        "https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw",
      name: "Bogdan Dimoiu",
    },
  ];
  const CURRENT_USER: TaskDetailsSidebarPersonModel = {
    id: "4",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFHaxDTCNnEXQ/profile-displayphoto-shrink_800_800/0/1685466156795?e=1701907200&v=beta&t=fGAsu5L4sMJ4N9aks4ZKS5_D3fYZsQ-Ffh75-PfSiEw",
    name: "Stelian Gheorghe",
  };
  const [subscribedPersons, setSubscribedPersons] =
    useState(SUBSCRIBED_PERSONS);

  const currentUserSubscribed = !!subscribedPersons.find(
    (person) => person.id === CURRENT_USER.id,
  );

  const handleSubscribe = () => {
    if (currentUserSubscribed) {
      const filteredSubscribedPersons = subscribedPersons.filter(
        (person) => person.id !== CURRENT_USER.id,
      );

      setSubscribedPersons(filteredSubscribedPersons);
    } else {
      setSubscribedPersons((prev) => [...prev, CURRENT_USER]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-sm font-medium text-zinc-700">Subscribed</div>
      <TaskDetailsSidebarPersonsPreview assignedPersons={subscribedPersons} />
      <TaskDetailsSidebarSubscribedAction
        currentUserSubscribed={currentUserSubscribed}
        handleSubscribe={handleSubscribe}
      />
    </div>
  );
};

export default TaskDetailsSidebarSubscribed;
