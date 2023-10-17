import { useState } from "react";
import TaskDetailsDescriptionEditMarkdown from "./TaskDetailsDescriptionEditMarkdown/TaskDetailsDescriptionEditMarkdown";

const TaskDetailsDescription = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="h-full overflow-hidden rounded-xl bg-white px-12 py-6 shadow-sm">
      <div className="mb-3 font-medium">Description</div>
      <TaskDetailsDescriptionEditMarkdown
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </div>
  );
};

export default TaskDetailsDescription;
