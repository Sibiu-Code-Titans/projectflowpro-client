import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const TaskDetailsFooterActivityCommentActionsReact = () => {
  const [reaction, setReaction] = useState<"liked" | "disliked" | undefined>(
    undefined,
  );

  const handleReact = (newReaction: "liked" | "disliked" | undefined) => {
    if (reaction === newReaction) {
      setReaction(undefined);
    } else {
      setReaction(newReaction);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <div
        onClick={() => handleReact("liked")}
        className={`flex cursor-pointer items-center gap-x-1 rounded-full border-2 p-1 px-2 transition-all hover:border-sky-400 hover:text-sky-400 ${
          reaction === "liked" ? "border-sky-400 text-sky-400" : ""
        }`}
      >
        <AiOutlineLike />
        <div className="text-xs">2</div>
      </div>
      <div
        onClick={() => handleReact("disliked")}
        className={`flex cursor-pointer items-center gap-x-1 rounded-full border-2 p-1 px-2 transition-all hover:border-red-400 hover:text-red-400 ${
          reaction === "disliked" ? "border-red-400 text-red-400" : ""
        }`}
      >
        <AiOutlineDislike />
        <div className="text-xs">2</div>
      </div>
    </div>
  );
};

export default TaskDetailsFooterActivityCommentActionsReact;
