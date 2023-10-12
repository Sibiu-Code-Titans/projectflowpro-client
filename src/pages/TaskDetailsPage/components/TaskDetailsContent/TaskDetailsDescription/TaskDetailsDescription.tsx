import { useState } from "react";
import PROButton from "../../../../../common/components/PROButton";
import TaskDetailsDescriptionEdit from "./TaskDetailsDescriptionEdit/TaskDetailsDescriptionEdit";

const TaskDetailsDescription = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSaveDescription = () => {
    setIsEditMode(false);
  };

  return (
    <div className="h-full overflow-hidden rounded-xl bg-white px-12 py-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between font-medium">
        <div>Description</div>
        {isEditMode && (
          <div className="flex items-center gap-x-2 text-sm">
            <PROButton
              content="Save"
              className="bg-purple-500"
              onClick={() => {}}
            />
            <PROButton
              className="bg-transparent text-zinc-700"
              content="Cancel"
              onClick={() => setIsEditMode(false)}
            />
          </div>
        )}
      </div>
      <TaskDetailsDescriptionEdit
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </div>
  );
};

export default TaskDetailsDescription;
