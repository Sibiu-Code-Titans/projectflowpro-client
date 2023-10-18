import { useCurrentEditor } from "@tiptap/react";
import { cn } from "../../../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditMorePanelCode = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return <></>;

  return (
    <div
      onClick={() => editor.chain().focus().toggleCode().run()}
      className={cn(
        "cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200 hover:text-zinc-700",
        editor.isActive("code") ? "bg-slate-100 text-zinc-700" : "",
      )}
    >
      Code
    </div>
  );
};

export default TaskDetailsDescriptionEditMorePanelCode;
