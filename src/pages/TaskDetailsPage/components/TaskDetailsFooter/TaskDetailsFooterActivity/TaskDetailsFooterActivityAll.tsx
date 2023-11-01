import TaskDetailsFooterActivityComments from "./TaskDetailsFooterActivityComments/TaskDetailsFooterActivityComments";
import TaskDetailsFooterActivityHistory from "./TaskDetailsFooterActivityHistory/TaskDetailsFooterActivityHistory";
import TaskDetailsFooterActivityWorkLog from "./TaskDetailsFooterActivityWorkLog/TaskDetailsFooterActivityWorkLog";

const TaskDetailsFooterActivityAll = () => {
  return (
    <div>
      <TaskDetailsFooterActivityWorkLog />
      <TaskDetailsFooterActivityHistory />
      <TaskDetailsFooterActivityComments hideInput />
    </div>
  );
};

export default TaskDetailsFooterActivityAll;
