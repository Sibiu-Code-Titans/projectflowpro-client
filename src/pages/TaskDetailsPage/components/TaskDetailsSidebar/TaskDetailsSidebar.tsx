import TaskDetailsSidebarAssignees from "./TaskDetailsSidebarAssignees/TaskDetailsSidebarAssignees";
import TaskDetailsSidebarReportingTo from "./TaskDetailsSidebarReportingTo";
import TaskDetailsSidebarSubscribed from "./TaskDetailsSidebarSubscribed/TaskDetailsSidebarSubscribed";
import TaskDetailsSidebarTags from "./TaskDetailsSidebarTags/TaskDetailsSidebarTags";

const TaskDetailsSidebar = () => {
  return (
    <div className="flex h-fit w-1/4 flex-col gap-y-4 overflow-y-scroll rounded-xl bg-white p-6 shadow-sm">
      <TaskDetailsSidebarAssignees />
      <TaskDetailsSidebarReportingTo />
      <TaskDetailsSidebarSubscribed />
      <TaskDetailsSidebarTags />
    </div>
  );
};

export default TaskDetailsSidebar;
