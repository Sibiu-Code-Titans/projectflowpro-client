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
        "cursor-pointer rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95",
        editor.isActive("bulletList") ? "bg-zinc-200 shadow-inner" : "",
      )}
    >
      <FaListUl />
    </div>
  );
};

export default TaskDetailsDescriptionEditUnorderedList;
