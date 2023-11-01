import TaskDetailsFooterActivity from "./TaskDetailsFooterActivity/TaskDetailsFooterActivity";
import TaskDetailsFooterRelatedTasks from "./TaskDetailsFooterRelatedTasks/TaskDetailsFooterRelatedTasks";

const TaskDetailsFooter = () => {
  return (
    <div className="mt-6">
      <TaskDetailsFooterRelatedTasks />
      <TaskDetailsFooterActivity />
    </div>
  );
};

export default TaskDetailsFooter;
