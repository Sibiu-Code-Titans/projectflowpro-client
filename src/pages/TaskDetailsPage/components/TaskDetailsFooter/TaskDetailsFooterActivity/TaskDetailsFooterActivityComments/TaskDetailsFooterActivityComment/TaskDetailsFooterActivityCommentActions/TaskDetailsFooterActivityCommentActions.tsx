import { Dispatch, FC, SetStateAction } from "react";
import TaskDetailsFooterActivityCommentActionsReact from "./TaskDetailsFooterActivityCommentActionsReact";
import TaskDetailsFooterActivityCommentActionsUpdate from "./TaskDetailsFooterActivityCommentActionsUpdate/TaskDetailsFooterActivityCommentActionsUpdate";

type Props = {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsFooterActivityCommentActions: FC<Props> = ({
  isEditMode,
  setIsEditMode,
}) => {
  return (
    <div className="mt-2 flex items-center gap-x-4">
      <TaskDetailsFooterActivityCommentActionsUpdate
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
      {!isEditMode && <TaskDetailsFooterActivityCommentActionsReact />}
    </div>
  );
};

export default TaskDetailsFooterActivityCommentActions;
