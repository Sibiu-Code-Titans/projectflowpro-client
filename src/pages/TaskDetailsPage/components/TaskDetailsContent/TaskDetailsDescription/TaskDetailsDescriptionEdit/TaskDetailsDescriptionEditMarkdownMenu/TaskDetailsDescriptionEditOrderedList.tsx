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
        "cursor-pointer rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95",
        editor.isActive("orderedList") ? "bg-zinc-200 shadow-inner" : "",
      )}
    >
      <FaListOl />
    </div>
  );
};

export default TaskDetailsDescriptionEditOrderedList;
