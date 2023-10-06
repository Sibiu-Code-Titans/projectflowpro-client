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
        "w-fit rounded-lg border-2 px-4 py-1.5 text-sm shadow-md outline-2"
      }
    >
      <div className="font-semibold shadow-black drop-shadow-sm">{content}</div>
    </div>
  );
};

export default TaskStatusBadge;
