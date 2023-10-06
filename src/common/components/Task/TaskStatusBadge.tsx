import { FC } from "react";

type Props = {
  color: string;
  content: string;
};
const TaskStatusBadge: FC<Props> = ({ color, content }) => {
  return (
    <div
      style={{
        color,
        backgroundColor: `${color}1A`,
        borderColor: color,
      }}
      className={
        "rounded-lg shadow-md outline-2 w-fit py-1.5 px-4 text-sm border-2"
      }
    >
      <div className="drop-shadow-sm shadow-black font-semibold">{content}</div>
    </div>
  );
};

export default TaskStatusBadge;
