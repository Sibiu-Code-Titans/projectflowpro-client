import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import TaskDetailsDescriptionEditMorePanel from "./TaskDetailsDescriptionEditMorePanel/TaskDetailsDescriptionEditMorePanel";

const TaskDetailsDescriptionEditMore = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowMore((prev) => !prev)}
        className="tiptap-markdown-option"
      >
        <FaEllipsisH />
      </div>
      {showMore && (
        <TaskDetailsDescriptionEditMorePanel setShowMore={setShowMore} />
      )}
    </div>
  );
};

export default TaskDetailsDescriptionEditMore;
