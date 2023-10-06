import { FC } from "react";
import { HEXCODE_OPACITY_10 } from "../../data/constants";

type Props = {
  color: string;
  content: string;
};
const TaskStatusBadge: FC<Props> = ({ color, content }) => {
  return (
    <div
      style={{
        color,
        backgroundColor: `${color}${HEXCODE_OPACITY_10}`,
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
