import { FC } from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
};
const TaskDetailsSubheader: FC<Props> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-x-2 rounded-t-md font-medium">
      {icon}
      {label}
    </div>
  );
};

export default TaskDetailsSubheader;
