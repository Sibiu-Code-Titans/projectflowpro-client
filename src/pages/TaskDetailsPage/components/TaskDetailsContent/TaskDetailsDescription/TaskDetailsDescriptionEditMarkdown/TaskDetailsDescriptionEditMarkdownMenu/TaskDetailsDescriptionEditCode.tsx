import { useCurrentEditor } from "@tiptap/react";
import { FaCode } from "react-icons/fa";
import { cn } from "../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditCode = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      className={cn(
        "cursor-pointer rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95",
        editor.isActive("codeBlock") ? "bg-zinc-200 shadow-inner" : "",
      )}
    >
      <FaCode />
    </div>
  );
};

export default TaskDetailsDescriptionEditCode;
