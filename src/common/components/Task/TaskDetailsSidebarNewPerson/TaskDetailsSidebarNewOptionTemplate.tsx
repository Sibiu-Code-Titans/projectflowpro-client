import { FC } from "react";

type Props = {
  option: any;
};
const TaskDetailsSidebarNewOptionTemplate: FC<Props> = ({ option }) => {
  return (
    <div className="flex items-center gap-x-1 text-sm">
      {option.image ? (
        <img
          alt={option.name}
          src={option.image}
          className="mr-1 h-8 w-8 rounded-full"
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
