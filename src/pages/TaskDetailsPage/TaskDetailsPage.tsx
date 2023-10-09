import TaskDetailsContent from "./components/TaskDetailsContent/TaskDetailsContent";
import TaskDetailsNavbar from "./components/TaskDetailsNavbar";
import TaskDetailsSidebar from "./components/TaskDetailsSidebar/TaskDetailsSidebar";

const TaskDetailsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <TaskDetailsNavbar />
      <div className="flex w-full gap-x-4">
        <TaskDetailsContent />
        <TaskDetailsSidebar />
      </div>
    </div>
  );
};

export default TaskDetailsPage;
