import { FC } from "react";
import { TaskDetailsSidebarPersonModel } from "../../../pages/TaskDetailsPage/data/models/TaskDetailsSidebarModels";
import TaskPersonImage from "./TaskPersonImage";

type Props = {
  assignedPersons: TaskDetailsSidebarPersonModel[];
};
const TaskDetailsSidebarPersonsPreview: FC<Props> = ({ assignedPersons }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-1 rounded-md bg-zinc-100 px-2 py-1.5 shadow-sm">
        {assignedPersons.map((person) => (
          <TaskPersonImage
            key={person.id}
            size="sm"
            name={person.name}
            url=""
            src={person.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskDetailsSidebarPersonsPreview;
