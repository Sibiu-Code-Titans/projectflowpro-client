import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import TaskDetailsDescriptionEditMorePanel from "./TaskDetailsDescriptionEditMorePanel";

const TaskDetailsDescriptionEditMore = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowMore((prev) => !prev)}
        className="cursor-pointer rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95"
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
