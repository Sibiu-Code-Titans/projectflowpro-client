import { FC } from "react";

type Props = {
  remainingDays: string;
};
const TaskDetailsInfoBarRemainingDays: FC<Props> = ({ remainingDays }) => {
  return (
    <div>
      <div className="text-lg font-semibold text-purple-500">
        {remainingDays} Days
      </div>
      <div className="text-sm text-zinc-500">remaining</div>
    </div>
  );
};

export default TaskDetailsInfoBarRemainingDays;
