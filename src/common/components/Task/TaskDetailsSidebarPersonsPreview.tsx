import { FC } from "react";
import { TaskDetailsSidebarPersonModel } from "../../../pages/TaskDetailsPage/data/TaskDetailsSidebarModels";

type Props = {
  assignedPersons: TaskDetailsSidebarPersonModel[];
};
const TaskDetailsSidebarPersonsPreview: FC<Props> = ({ assignedPersons }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-1 rounded-md bg-zinc-100 px-2 py-1.5 shadow-sm">
        {assignedPersons.map((person) => (
          <img
            alt={`${person.name}-image`}
            className="h-8 w-8 cursor-pointer rounded-full shadow-sm"
            key={person.id}
            src={person.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskDetailsSidebarPersonsPreview;
