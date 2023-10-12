import TaskDetailsDescription from "./TaskDetailsDescription/TaskDetailsDescription";
import TaskDetailsInfoBar from "./TaskDetailsInfoBar/TaskDetailsInfoBar";

const TaskDetailsContent = () => {
  return (
    <div className="flex max-w-[75%] flex-1 flex-col gap-y-2">
      <TaskDetailsInfoBar />
      <TaskDetailsDescription />
    </div>
  );
};

export default TaskDetailsContent;
