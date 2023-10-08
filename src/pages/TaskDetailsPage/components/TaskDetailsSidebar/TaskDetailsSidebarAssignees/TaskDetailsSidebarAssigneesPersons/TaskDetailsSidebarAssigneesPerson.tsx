import { Dispatch, FC, SetStateAction } from "react";
import { cn } from "../../../../../../common/data/utils";
import { TaskDetailsSidebarAssigneeModel } from "../../../../data/TaskDetailsSidebarModels";

type Props = {
  id: string;
  image: string;
  isSelected: boolean;
  name: string;
  setAssignees: Dispatch<SetStateAction<TaskDetailsSidebarAssigneeModel[]>>;
};
const TaskDetailsSidebarAssigneesPerson: FC<Props> = ({
  id,
  image,
  isSelected,
  name,
  setAssignees,
}) => {
  const getUpdatedAssignees = (assignees: TaskDetailsSidebarAssigneeModel[]) =>
    assignees.map((assignee) => {
      if (assignee.id === id) {
        return {
          ...assignee,
          isSelected: !assignee.isSelected,
        };
      }

      return assignee;
    });

  const handleSelect = () => {
    setAssignees((prev) => getUpdatedAssignees(prev));
  };

  const checkmarkClassName = cn(
    "border-2 h-4 w-4 rounded-full border-purple-200",
    {
      "bg-purple-500": isSelected,
      "bg-purple-50": !isSelected,
    },
  );

  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-xl border-1 border-zinc-300 px-3 py-1.5 text-sm shadow-sm transition-all hover:shadow-md active:scale-95"
      onClick={handleSelect}
    >
      <div className="flex items-center gap-x-2">
        <img
          src={image}
          alt={`${name}-image`}
          className="h-8 w-8 rounded-full shadow-md"
        />
        <div className="text-zinc-700">{name}</div>
      </div>
      <div className={checkmarkClassName}></div>
    </div>
  );
};

export default TaskDetailsSidebarAssigneesPerson;
