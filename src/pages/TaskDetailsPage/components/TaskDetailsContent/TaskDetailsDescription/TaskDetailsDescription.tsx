import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import TaskDetailsSubheader from "../../../../../common/components/Task/TaskDetailsSubheader";
import TaskDetailsDescriptionEditMarkdown from "./TaskDetailsDescriptionEditMarkdown/TaskDetailsDescriptionEditMarkdown";

const TaskDetailsDescription = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <TaskDetailsSubheader icon={<FaInfoCircle />} label="Description" />
      <TaskDetailsDescriptionEditMarkdown
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </>
  );
};

export default TaskDetailsDescription;
