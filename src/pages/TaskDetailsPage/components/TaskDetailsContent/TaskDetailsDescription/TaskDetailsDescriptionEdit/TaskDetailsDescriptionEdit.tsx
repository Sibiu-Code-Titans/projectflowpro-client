import { Divider } from "primereact/divider";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import TaskDetailsDescriptionEditBold from "./TaskDetailsDescriptionEditBold";
import TaskDetailsDescriptionEditCode from "./TaskDetailsDescriptionEditCode";
import TaskDetailsDescriptionEditColor from "./TaskDetailsDescriptionEditColor";
import TaskDetailsDescriptionEditImages from "./TaskDetailsDescriptionEditImages";
import TaskDetailsDescriptionEditInfo from "./TaskDetailsDescriptionEditInfo";
import TaskDetailsDescriptionEditItalic from "./TaskDetailsDescriptionEditItalic";
import TaskDetailsDescriptionEditLink from "./TaskDetailsDescriptionEditLink";
import TaskDetailsDescriptionEditMention from "./TaskDetailsDescriptionEditMention";
import TaskDetailsDescriptionEditMore from "./TaskDetailsDescriptionEditMore";
import TaskDetailsDescriptionEditOrderedList from "./TaskDetailsDescriptionEditOrderedList";
import TaskDetailsDescriptionEditTable from "./TaskDetailsDescriptionEditTable";
import TaskDetailsDescriptionEditText from "./TaskDetailsDescriptionEditText";
import TaskDetailsDescriptionEditUnorderedList from "./TaskDetailsDescriptionEditUnorderedList";

type Props = {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
};
const TaskDetailsDescriptionEdit: FC<Props> = ({
  isEditMode,
  setIsEditMode,
}) => {
  const [text, setText] = useState("");
  const taskDescriptionElement = useRef<any>(null);

  const handleContentChange = (e: any) => {
    setText(e.target.innerHTML);
  };

  return (
    <div>
      {JSON.stringify(text)}
      {isEditMode && (
        <div className="mb-2 flex items-center gap-x-4 rounded-md bg-zinc-50 px-3 py-1 text-sm shadow-inner shadow-zinc-300">
          <TaskDetailsDescriptionEditText />
          <Divider layout="vertical" className="mx-0.5 h-1 w-0.5 bg-zinc-200" />
          <TaskDetailsDescriptionEditBold />
          <TaskDetailsDescriptionEditItalic />
          <TaskDetailsDescriptionEditMore />
          <Divider layout="vertical" className="mx-0.5 h-1 w-0.5 bg-zinc-200" />
          <TaskDetailsDescriptionEditColor />
          <Divider layout="vertical" className="mx-0.5 h-1 w-0.5 bg-zinc-200" />
          <TaskDetailsDescriptionEditUnorderedList />
          <TaskDetailsDescriptionEditOrderedList />
          <Divider layout="vertical" className="mx-0.5 h-1 w-0.5 bg-zinc-200" />
          <TaskDetailsDescriptionEditLink />
          <TaskDetailsDescriptionEditImages />
          <TaskDetailsDescriptionEditMention />
          <TaskDetailsDescriptionEditTable />
          <TaskDetailsDescriptionEditCode />
          <TaskDetailsDescriptionEditInfo />
        </div>
      )}
      <div
        contentEditable={true}
        ref={taskDescriptionElement}
        onClick={() => setIsEditMode(true)}
        onInput={handleContentChange}
        className="min-h-[50vh] w-full cursor-text resize-none rounded-md p-4 pb-0 leading-7 text-zinc-600 shadow-inner outline-none transition-all hover:bg-zinc-100"
      ></div>
    </div>
  );
};

export default TaskDetailsDescriptionEdit;
