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
        "cursor-pointer rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95",
      )}
    >
      <FaBold />
    </button>
  );
};

export default TaskDetailsDescriptionEditBold;
