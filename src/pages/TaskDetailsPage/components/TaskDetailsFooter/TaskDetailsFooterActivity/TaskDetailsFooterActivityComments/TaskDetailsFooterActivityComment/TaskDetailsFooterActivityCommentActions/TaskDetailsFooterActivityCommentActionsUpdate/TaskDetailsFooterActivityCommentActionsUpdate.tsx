import { Dispatch, FC, SetStateAction, useState } from "react";
import TaskDetailsFooterActivityCommentActionsUpdateFinish from "./TaskDetailsFooterActivityCommentActionsUpdateFinish";
import TaskDetailsFooterActivityCommentActionsUpdateInitiate from "./TaskDetailsFooterActivityCommentActionsUpdateInitiate";

type Props = {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsFooterActivityCommentActionsUpdate: FC<Props> = ({
  isEditMode,
  setIsEditMode,
}) => {
  const [myComment] = useState(true);

  const handleDelete = () => {};

  const handleEdit = () => {
    if (!myComment) return;

    setIsEditMode(true);
  };

  return (
    <div>
      {myComment ? (
        !isEditMode ? (
          <TaskDetailsFooterActivityCommentActionsUpdateInitiate
            handleEdit={handleEdit}
          />
        ) : (
          <TaskDetailsFooterActivityCommentActionsUpdateFinish
            setIsEditMode={setIsEditMode}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskDetailsFooterActivityCommentActionsUpdate;
