import { useCurrentEditor } from "@tiptap/react";
import { cn } from "../../../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditMorePanelUnderline = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return <></>;

  return (
    <div
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      className={cn(
        "cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200 hover:text-zinc-700",
        editor.isActive("underline") ? "bg-slate-100 text-zinc-700" : "",
      )}
    >
      Underline
    </div>
  );
};

export default TaskDetailsDescriptionEditMorePanelUnderline;
