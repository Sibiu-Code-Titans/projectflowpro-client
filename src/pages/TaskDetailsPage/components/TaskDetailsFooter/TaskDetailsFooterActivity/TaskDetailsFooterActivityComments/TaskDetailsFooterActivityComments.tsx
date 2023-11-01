import { FC } from "react";
import TaskDetailsFooterActivityComment from "./TaskDetailsFooterActivityComment/TaskDetailsFooterActivityComment";
import TaskDetailsFooterActivityCommentsInput from "./TaskDetailsFooterActivityCommentsInput";

type Props = {
  hideInput?: boolean;
};
const TaskDetailsFooterActivityComments: FC<Props> = ({ hideInput }) => {
  return (
    <div className="mb-6 flex flex-col gap-y-6">
      {!hideInput && <TaskDetailsFooterActivityCommentsInput />}
      <TaskDetailsFooterActivityComment />
      <TaskDetailsFooterActivityComment />
      <TaskDetailsFooterActivityComment />
    </div>
  );
};

export default TaskDetailsFooterActivityComments;
