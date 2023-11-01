import TaskDetailsFooter from "../TaskDetailsFooter/TaskDetailsFooter";
import TaskDetailsDescription from "./TaskDetailsDescription/TaskDetailsDescription";
import TaskDetailsInfoBar from "./TaskDetailsInfoBar/TaskDetailsInfoBar";

const TaskDetailsContent = () => {
  return (
    <div className="flex max-w-[75%] flex-1 flex-col gap-y-2">
      <TaskDetailsInfoBar />
      <div className="rounded-xl bg-white p-6 shadow-md">
        <TaskDetailsDescription />
        <TaskDetailsFooter />
      </div>
    </div>
  );
};

export default TaskDetailsContent;
