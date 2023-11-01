import { useCurrentEditor } from "@tiptap/react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useState } from "react";
import { HEADINGS_OPTIONS } from "../../../../../../../common/data/constants";
import { TaskDetailsDescriptionHeadingOptionModel } from "../../../../../data/models/TaskDetailsDescriptionModels";

const TaskDetailsDescriptionEditText = () => {
  const { editor } = useCurrentEditor();
  const [selectedHeading, setSelectedHeading] =
    useState<TaskDetailsDescriptionHeadingOptionModel>(HEADINGS_OPTIONS[0]);

  const getItemTemplate = (
    option: TaskDetailsDescriptionHeadingOptionModel,
  ) => {
    if (!option.name) return <></>;

    return <div dangerouslySetInnerHTML={{ __html: option.name }}></div>;
  };

  const selectHeading = (e: DropdownChangeEvent) => {
    const headingToSelect = HEADINGS_OPTIONS.find(
      (option) => option.level === e.value.level,
    );

    if (!headingToSelect || !editor) return;

    setSelectedHeading(headingToSelect);

    if (headingToSelect.level === 0) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level: e.value.level }).run();
    }
  };

  return (
    <Dropdown
      className="bg-zinc-50 text-xs shadow-none"
      itemTemplate={getItemTemplate}
      onChange={selectHeading}
      options={HEADINGS_OPTIONS}
      placeholder="Normal text"
      optionLabel="label"
      value={selectedHeading}
    />
  );
};

export default TaskDetailsDescriptionEditText;
