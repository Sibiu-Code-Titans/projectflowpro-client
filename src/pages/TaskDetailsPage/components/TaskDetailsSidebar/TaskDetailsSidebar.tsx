import TaskDetailsSidebarAssignees from "./TaskDetailsSidebarAssignees/TaskDetailsSidebarAssignees";
import TaskDetailsSidebarReportingTo from "./TaskDetailsSidebarReportingTo";
import TaskDetailsSidebarStatus from "./TaskDetailsSidebarStatus";
import TaskDetailsSidebarWatching from "./TaskDetailsSidebarWatching";

const TaskDetailsSidebar = () => {
  return (
    <div className="flex w-1/4 flex-col gap-y-4 rounded-xl bg-white p-6 shadow-sm">
      <TaskDetailsSidebarStatus />
      <TaskDetailsSidebarAssignees />
      <TaskDetailsSidebarReportingTo />
      <TaskDetailsSidebarWatching />
      <TaskDetailsSidebarStatus />
    </div>
  );
};

export default TaskDetailsSidebar;
