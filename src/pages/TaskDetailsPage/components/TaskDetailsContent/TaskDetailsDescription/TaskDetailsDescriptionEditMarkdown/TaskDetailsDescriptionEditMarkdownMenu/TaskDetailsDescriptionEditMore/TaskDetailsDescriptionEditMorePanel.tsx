import { useCurrentEditor } from "@tiptap/react";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import useClickOutside from "../../../../../../../../common/data/hooks/useClickOutside";
import { cn } from "../../../../../../../../common/data/utils";
import { TaskDetailsDescriptionMoreEffects } from "../../../../../../data/models/TaskDetailsDescriptionModels";

type Props = {
  setShowMore: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsDescriptionEditMorePanel: FC<Props> = ({ setShowMore }) => {
  const { editor } = useCurrentEditor();
  const ref = useRef(null);

  const applyEffect = (effect: TaskDetailsDescriptionMoreEffects) => {
    setShowMore(false);

    if (!editor) return;

    switch (effect) {
      case TaskDetailsDescriptionMoreEffects.underline:
        editor.chain().focus().toggleUnderline().run();
        break;
      case TaskDetailsDescriptionMoreEffects.strikethrough:
        editor.chain().focus().toggleStrike().run();
        break;
      case TaskDetailsDescriptionMoreEffects.code:
        editor.chain().focus().toggleCode().run();
        break;
      case TaskDetailsDescriptionMoreEffects.clearFormatting:
        editor.chain().focus().unsetAllMarks().run();
        break;
    }
  };

  useClickOutside(ref, () => setShowMore(false));

  if (!editor) return <></>;

  return (
    <div
      ref={ref}
      className="absolute left-1/2 z-20 flex w-max -translate-x-1/2 transform flex-col overflow-hidden rounded-md bg-white text-lg shadow-md"
    >
      <div
        onClick={() => applyEffect(TaskDetailsDescriptionMoreEffects.underline)}
        className={cn(
          "cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200 hover:text-zinc-700",
          editor.isActive("underline") ? "bg-slate-100 text-zinc-700" : "",
        )}
      >
        Underline
      </div>
      <div
        onClick={() =>
          applyEffect(TaskDetailsDescriptionMoreEffects.strikethrough)
        }
        className={cn(
          "cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200 hover:text-zinc-700",
          editor.isActive("strike") ? "bg-slate-100 text-zinc-700" : "",
        )}
      >
        Strikethrough
      </div>
      <div
        onClick={() => applyEffect(TaskDetailsDescriptionMoreEffects.code)}
        className={cn(
          "cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200 hover:text-zinc-700",
          editor.isActive("code") ? "bg-slate-100 text-zinc-700" : "",
        )}
      >
        Code
      </div>
      <div
        onClick={() =>
          applyEffect(TaskDetailsDescriptionMoreEffects.clearFormatting)
        }
        className="cursor-pointer px-3 py-1.5 text-zinc-500 transition-all hover:bg-slate-200"
      >
        Clear Formatting
      </div>
    </div>
  );
};

export default TaskDetailsDescriptionEditMorePanel;
