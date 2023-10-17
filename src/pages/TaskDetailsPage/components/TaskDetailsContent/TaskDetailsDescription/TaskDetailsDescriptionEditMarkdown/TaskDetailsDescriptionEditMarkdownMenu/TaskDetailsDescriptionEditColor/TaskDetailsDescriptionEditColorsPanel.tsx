import { useCurrentEditor } from "@tiptap/react";
import { Button } from "primereact/button";
import { Dispatch, FC, SetStateAction, useRef } from "react";
import { COLORS_PANEL_OPTIONS } from "../../../../../../../../common/data/constants";
import useClickOutside from "../../../../../../../../common/data/hooks/useClickOutside";

type Props = {
  setShowColorsPanel: Dispatch<SetStateAction<boolean>>;
  setSelectedColor: Dispatch<SetStateAction<string>>;
};
const TaskDetailsDescriptionEditColorsPanel: FC<Props> = ({
  setShowColorsPanel,
  setSelectedColor,
}) => {
  const { editor } = useCurrentEditor();
  const ref = useRef(null);

  const selectColor = (color: string) => {
    if (!editor) return <></>;

    setSelectedColor(color);

    editor.chain().focus().setColor(color).run();
  };

  useClickOutside(ref, () => setShowColorsPanel(false));

  if (!editor) return <></>;

  return (
    <div
      ref={ref}
      className="absolute left-1/2 z-20 flex -translate-x-1/2 transform gap-3 rounded-md bg-white p-3 shadow-md"
    >
      {COLORS_PANEL_OPTIONS.map((col) => {
        return (
          <div className="flex flex-col gap-2">
            {col.map((color) => {
              return (
                <Button
                  onClick={() => selectColor(color)}
                  style={{ backgroundColor: color }}
                  className="my-1 block h-7 w-7 cursor-pointer rounded-md border-1 shadow-sm transition-all hover:scale-105 hover:shadow-md active:scale-95"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TaskDetailsDescriptionEditColorsPanel;
