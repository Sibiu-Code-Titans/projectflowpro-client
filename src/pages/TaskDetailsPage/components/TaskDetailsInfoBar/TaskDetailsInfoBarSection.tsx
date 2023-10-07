import { FC } from "react";
import { cn, getFormattedDateOrValue } from "../../../../common/data/utils";

type Props = {
  dotColor: string;
  label: string;
  rightContent?: JSX.Element;
  value: string;
};
const TaskDetailsInfoBarSection: FC<Props> = ({
  dotColor,
  label,
  rightContent,
  value,
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <div>
        <div className="mb-1 flex items-center gap-x-2">
          <div className={cn("mr-1 h-3 w-3 rounded-full", dotColor)}></div>
          <div>{label}</div>
        </div>
        <div className="pl-6 text-sm text-zinc-500">
          {getFormattedDateOrValue(value)}
        </div>
      </div>
      {rightContent}
    </div>
  );
};

export default TaskDetailsInfoBarSection;
