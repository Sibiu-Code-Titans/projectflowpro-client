import { useCurrentEditor } from "@tiptap/react";
import { FaBold } from "react-icons/fa";
import { cn } from "../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditBold = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return <></>;

  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().toggleBold().run()}
      className={cn(
        editor.isActive("bold") ? "rounded-md bg-zinc-200" : "",
        "tiptap-markdown-option",
      )}
    >
      <FaBold />
    </button>
  );
};

export default TaskDetailsDescriptionEditBold;
