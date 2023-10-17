import { Divider } from "primereact/divider";
import TaskDetailsDescriptionEditBold from "./TaskDetailsDescriptionEditBold";
import TaskDetailsDescriptionEditCode from "./TaskDetailsDescriptionEditCode";
import TaskDetailsDescriptionEditColor from "./TaskDetailsDescriptionEditColor/TaskDetailsDescriptionEditColor";
import TaskDetailsDescriptionEditImages from "./TaskDetailsDescriptionEditImages";
import TaskDetailsDescriptionEditInfo from "./TaskDetailsDescriptionEditInfo";
import TaskDetailsDescriptionEditItalic from "./TaskDetailsDescriptionEditItalic";
import TaskDetailsDescriptionEditLink from "./TaskDetailsDescriptionEditLink";
import TaskDetailsDescriptionEditMention from "./TaskDetailsDescriptionEditMention";
import TaskDetailsDescriptionEditMore from "./TaskDetailsDescriptionEditMore/TaskDetailsDescriptionEditMore";
import TaskDetailsDescriptionEditOrderedList from "./TaskDetailsDescriptionEditOrderedList";
import TaskDetailsDescriptionEditTable from "./TaskDetailsDescriptionEditTable";
import TaskDetailsDescriptionEditText from "./TaskDetailsDescriptionEditText";
import TaskDetailsDescriptionEditUnorderedList from "./TaskDetailsDescriptionEditUnorderedList";

const TaskDetailsDescriptionEditMarkdownMenu = () => {
  return (
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
  );
};

export default TaskDetailsDescriptionEditMarkdownMenu;
