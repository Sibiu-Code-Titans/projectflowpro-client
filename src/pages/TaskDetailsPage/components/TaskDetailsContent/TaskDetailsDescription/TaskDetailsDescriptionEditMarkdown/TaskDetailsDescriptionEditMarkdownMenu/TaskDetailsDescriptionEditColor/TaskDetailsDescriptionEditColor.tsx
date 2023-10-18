import { useCurrentEditor } from "@tiptap/react";
import { useState } from "react";
import { COLORS_PANEL_OPTIONS } from "../../../../../../../../common/data/constants";
import TaskDetailsDescriptionEditColorsPanel from "./TaskDetailsDescriptionEditColorsPanel";

const TaskDetailsDescriptionEditColor = () => {
  const [showColorsPanel, setShowColorsPanel] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    COLORS_PANEL_OPTIONS[0][0],
  );
  const { editor } = useCurrentEditor();

  if (!editor) return <></>;

  return (
    <div className="relative">
      <button
        onClick={() => setShowColorsPanel((prev) => !prev)}
        className={
          "flex cursor-pointer items-center gap-x-1 rounded-md p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95"
        }
      >
        <div>A</div>
        <div
          className="block h-3 w-3 rounded-sm"
          style={{ backgroundColor: selectedColor }}
        ></div>
      </button>
      {showColorsPanel && (
        <TaskDetailsDescriptionEditColorsPanel
          setShowColorsPanel={setShowColorsPanel}
          setSelectedColor={setSelectedColor}
        />
      )}
    </div>
  );
};

export default TaskDetailsDescriptionEditColor;
