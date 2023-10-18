import { useCurrentEditor } from "@tiptap/react";
import { FaListOl } from "react-icons/fa";
import { cn } from "../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditOrderedList = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      className={cn(
        "tiptap-markdown-option",
        editor.isActive("orderedList") ? "bg-zinc-200 shadow-inner" : "",
      )}
    >
      <FaListOl />
    </div>
  );
};

export default TaskDetailsDescriptionEditOrderedList;
