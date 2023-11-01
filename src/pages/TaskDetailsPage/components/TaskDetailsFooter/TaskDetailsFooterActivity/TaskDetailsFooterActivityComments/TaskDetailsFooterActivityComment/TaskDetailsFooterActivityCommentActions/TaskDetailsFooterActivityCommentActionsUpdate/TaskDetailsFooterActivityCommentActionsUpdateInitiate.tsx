import { FC } from "react";

type Props = {
  handleEdit: () => void;
};
const TaskDetailsFooterActivityCommentActionsUpdateInitiate: FC<Props> = ({
  handleEdit,
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="cursor-pointer transition-all hover:scale-105 hover:text-red-400 hover:underline active:scale-95">
        Delete
      </span>
      <span
        onClick={handleEdit}
        className="cursor-pointer transition-all hover:scale-105 hover:underline active:scale-95 "
      >
        Edit
      </span>
    </div>
  );
};

export default TaskDetailsFooterActivityCommentActionsUpdateInitiate;
