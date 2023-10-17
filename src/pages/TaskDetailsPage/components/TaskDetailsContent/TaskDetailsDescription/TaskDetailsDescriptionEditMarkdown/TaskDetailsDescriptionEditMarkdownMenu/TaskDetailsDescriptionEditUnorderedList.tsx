import { useCurrentEditor } from "@tiptap/react";
import { FaListUl } from "react-icons/fa";
import { cn } from "../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditUnorderedList = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      className={cn(
        "tiptap-markdown-option",
        editor.isActive("bulletList") ? "bg-zinc-200 shadow-inner" : "",
      )}
    >
      <FaListUl />
    </div>
  );
};

export default TaskDetailsDescriptionEditUnorderedList;
