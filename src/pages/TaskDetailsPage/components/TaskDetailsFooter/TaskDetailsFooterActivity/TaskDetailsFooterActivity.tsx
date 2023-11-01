import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { FaCubes } from "react-icons/fa";
import TaskDetailsSubheader from "../../../../../common/components/Task/TaskDetailsSubheader";
import { parseViewEnum } from "../../../data/TaskDetailsPageUtils";
import { TaskDetailsFooterActivityViews } from "../../../data/models/TaskDetailsFooterModels";
import TaskDetailsFooterActivityAll from "./TaskDetailsFooterActivityAll";
import TaskDetailsFooterActivityComments from "./TaskDetailsFooterActivityComments/TaskDetailsFooterActivityComments";
import TaskDetailsFooterActivityHistory from "./TaskDetailsFooterActivityHistory/TaskDetailsFooterActivityHistory";
import TaskDetailsFooterActivityWorkLog from "./TaskDetailsFooterActivityWorkLog/TaskDetailsFooterActivityWorkLog";

const TaskDetailsFooterActivity = () => {
  const VIEWS: TaskDetailsFooterActivityViews[] = [
    TaskDetailsFooterActivityViews.comments,
    TaskDetailsFooterActivityViews.all,
    TaskDetailsFooterActivityViews.history,
    TaskDetailsFooterActivityViews.workLog,
  ];
  const [selectedView, setSelectedView] = useState(
    TaskDetailsFooterActivityViews.comments,
  );

  const mapViews = () =>
    VIEWS.map((view) => {
      return {
        name: parseViewEnum(view),
        value: view,
      };
    });

  return (
    <div>
      <div className="mb-2 mt-6 flex w-full flex-1 items-center justify-between">
        <TaskDetailsSubheader icon={<FaCubes />} label="Activity" />
        <Dropdown
          value={selectedView}
          onChange={(e) => setSelectedView(e.value)}
          options={mapViews()}
          optionLabel="name"
          placeholder="Select a view"
          className="min-w-[113px] text-xs"
        />
      </div>
      {selectedView === TaskDetailsFooterActivityViews.workLog ? (
        <TaskDetailsFooterActivityWorkLog />
      ) : selectedView === TaskDetailsFooterActivityViews.all ? (
        <TaskDetailsFooterActivityAll />
      ) : selectedView === TaskDetailsFooterActivityViews.history ? (
        <TaskDetailsFooterActivityHistory />
      ) : (
        <TaskDetailsFooterActivityComments />
      )}
    </div>
  );
};

export default TaskDetailsFooterActivity;
