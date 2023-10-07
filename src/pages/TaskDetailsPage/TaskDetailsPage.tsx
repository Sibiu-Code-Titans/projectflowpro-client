import TaskDetailsInfoBar from "./components/TaskDetailsInfoBar/TaskDetailsInfoBar";
import TaskDetailsNavbar from "./components/TaskDetailsNavbar";
import TaskDetailsSidebar from "./components/TaskDetailsSidebar/TaskDetailsSidebar";

const TaskDetailsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <TaskDetailsNavbar />
      <div className="flex gap-x-4">
        <TaskDetailsInfoBar />
        <TaskDetailsSidebar />
      </div>
    </div>
  );
};

export default TaskDetailsPage;
