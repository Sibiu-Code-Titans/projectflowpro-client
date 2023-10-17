import { useCurrentEditor } from "@tiptap/react";
import { FaItalic } from "react-icons/fa";
import { cn } from "../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditItalic = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return <></>;

  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      disabled={!editor.can().chain().toggleItalic().run()}
      className={cn(
        editor.isActive("italic") ? "bg-zinc-200 shadow-inner" : "",
        "cursor-pointer rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95",
      )}
    >
      <FaItalic />
    </button>
  );
};

export default TaskDetailsDescriptionEditItalic;
