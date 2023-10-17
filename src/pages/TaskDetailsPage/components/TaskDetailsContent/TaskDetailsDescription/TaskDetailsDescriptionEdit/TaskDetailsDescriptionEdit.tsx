import { Dispatch, FC, SetStateAction } from "react";
import TaskDetailsDescriptionEditMarkdown from "./TaskDetailsDescriptionEditMarkdown";

type Props = {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsDescriptionEdit: FC<Props> = ({
  isEditMode,
  setIsEditMode,
}) => {
  return (
    <TaskDetailsDescriptionEditMarkdown
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
    />
  );
};

export default TaskDetailsDescriptionEdit;
