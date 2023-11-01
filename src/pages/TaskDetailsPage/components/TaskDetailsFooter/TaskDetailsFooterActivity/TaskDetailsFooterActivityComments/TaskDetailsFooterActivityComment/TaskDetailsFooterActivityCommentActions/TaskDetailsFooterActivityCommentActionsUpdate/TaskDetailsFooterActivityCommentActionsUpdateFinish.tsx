import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsFooterActivityCommentActionsUpdateFinish: FC<Props> = ({
  setIsEditMode,
}) => {
  return (
    <div className="mt-2 flex items-center gap-x-3">
      <span className="cursor-pointer overflow-hidden rounded-md bg-purple-400 px-3 py-1.5 text-white shadow-sm transition-all hover:scale-105 hover:bg-purple-500 active:scale-95">
        Save
      </span>
      <span
        onClick={() => setIsEditMode(false)}
        className="cursor-pointer transition-all hover:scale-105 active:scale-95 "
      >
        Cancel
      </span>
    </div>
  );
};

export default TaskDetailsFooterActivityCommentActionsUpdateFinish;
