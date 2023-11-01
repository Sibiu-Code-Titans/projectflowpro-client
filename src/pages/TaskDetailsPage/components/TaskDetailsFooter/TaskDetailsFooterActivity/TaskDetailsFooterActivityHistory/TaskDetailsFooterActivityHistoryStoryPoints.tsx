import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  from: number;
  to: number;
};
const TaskDetailsFooterActivityHistoryStoryPoints: FC<Props> = ({
  from,
  to,
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <div>{from}</div>
      <FaLongArrowAltRight className="text-zinc-500" />
      <div>{to}</div>
    </div>
  );
};

export default TaskDetailsFooterActivityHistoryStoryPoints;
