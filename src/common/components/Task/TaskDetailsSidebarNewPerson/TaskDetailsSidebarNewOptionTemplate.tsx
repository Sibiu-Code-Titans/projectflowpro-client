import { FC } from "react";
import TaskPersonImage from "../TaskPersonImage";

type Props = {
  option: any;
};
const TaskDetailsSidebarNewOptionTemplate: FC<Props> = ({ option }) => {
  return (
    <div className="flex items-center gap-x-1 text-sm">
      {option.image ? (
        <TaskPersonImage
          size="sm"
          name={option.name}
          url=""
          src={option.image}
        />
      ) : option.color ? (
        <div
          className="h-3 w-3 rounded-full shadow-sm"
          style={{
            backgroundColor: option.color,
          }}
        />
      ) : (
        <></>
      )}
      <div className="text-zinc-700">{option.name}</div>
    </div>
  );
};

export default TaskDetailsSidebarNewOptionTemplate;
