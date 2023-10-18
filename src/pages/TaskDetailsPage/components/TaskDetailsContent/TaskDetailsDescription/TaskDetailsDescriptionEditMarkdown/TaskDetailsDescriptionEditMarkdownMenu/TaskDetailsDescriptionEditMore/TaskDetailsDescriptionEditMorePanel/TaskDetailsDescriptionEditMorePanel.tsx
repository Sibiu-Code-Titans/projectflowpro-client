import { useCurrentEditor } from "@tiptap/react";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import useClickOutside from "../../../../../../../../../common/data/hooks/useClickOutside";
import TaskDetailsDescriptionEditMorePanelClearFormatting from "./TaskDetailsDescriptionEditMorePanelClearFormatting";
import TaskDetailsDescriptionEditMorePanelCode from "./TaskDetailsDescriptionEditMorePanelCode";
import TaskDetailsDescriptionEditMorePanelStrikethrough from "./TaskDetailsDescriptionEditMorePanelStrikethrough";
import TaskDetailsDescriptionEditMorePanelUnderline from "./TaskDetailsDescriptionEditMorePanelUnderline";

type Props = {
  setShowMore: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsDescriptionEditMorePanel: FC<Props> = ({ setShowMore }) => {
  const { editor } = useCurrentEditor();
  const ref = useRef(null);

  useClickOutside(ref, () => setShowMore(false));

  if (!editor) return <></>;

  return (
    <div
      ref={ref}
      className="absolute left-1/2 z-20 flex w-max -translate-x-1/2 transform flex-col overflow-hidden rounded-md bg-white text-lg shadow-md"
    >
      <TaskDetailsDescriptionEditMorePanelUnderline />
      <TaskDetailsDescriptionEditMorePanelStrikethrough />
      <TaskDetailsDescriptionEditMorePanelCode />
      <TaskDetailsDescriptionEditMorePanelClearFormatting />
    </div>
  );
};

export default TaskDetailsDescriptionEditMorePanel;
