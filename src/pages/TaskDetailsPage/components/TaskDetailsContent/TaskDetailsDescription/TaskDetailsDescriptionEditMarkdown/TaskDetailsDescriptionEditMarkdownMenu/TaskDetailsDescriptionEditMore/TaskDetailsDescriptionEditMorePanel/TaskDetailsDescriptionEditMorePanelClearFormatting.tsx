import { useCurrentEditor } from "@tiptap/react";

const TaskDetailsDescriptionEditMorePanelClearFormatting = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return <></>;

  return (
    <div
      onClick={() => editor.chain().focus().unsetAllMarks().run()}
      className="cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200"
    >
      Clear Formatting
    </div>
  );
};

export default TaskDetailsDescriptionEditMorePanelClearFormatting;
