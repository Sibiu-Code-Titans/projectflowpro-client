import TaskDetailsInfoBar from "./components/TaskDetailsInfoBar/TaskDetailsInfoBar";
import TaskDetailsNavbar from "./components/TaskDetailsNavbar";

const TaskDetailsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <TaskDetailsNavbar />
      <TaskDetailsInfoBar />
    </div>
  );
};

export default TaskDetailsPage;
