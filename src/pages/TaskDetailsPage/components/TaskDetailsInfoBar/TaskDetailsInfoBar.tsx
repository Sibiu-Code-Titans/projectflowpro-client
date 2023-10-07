import { Divider } from "primereact/divider";
import { useState } from "react";
import TaskDetailsInfoBarProgressDoughnut from "./TaskDetailsInfoBarProgressDoughnut";
import TaskDetailsInfoBarRemainingDays from "./TaskDetailsInfoBarRemainingDays";
import TaskDetailsInfoBarSection from "./TaskDetailsInfoBarSection";

const TaskDetailsInfoBar = () => {
  const [progress] = useState(30);

  return (
    <div className="flex w-3/4 items-center justify-around rounded-xl bg-white py-6 shadow-sm">
      <TaskDetailsInfoBarSection
        dotColor="bg-purple-400"
        label="Date created"
        value={new Date().toString()}
      />
      <TaskDetailsInfoBarSection
        dotColor="bg-sky-400"
        label="Label updated"
        value={new Date().toString()}
      />
      <TaskDetailsInfoBarSection
        dotColor="bg-emerald-400"
        label="Progress"
        value={`${progress}% Completed`}
        rightContent={
          <TaskDetailsInfoBarProgressDoughnut progress={progress} />
        }
      />
      <Divider layout="vertical" className="mx-0 w-0.5 bg-zinc-100" />
      <TaskDetailsInfoBarSection
        dotColor="bg-red-400"
        label="Deadline"
        value={new Date().toString()}
      />
      <TaskDetailsInfoBarRemainingDays remainingDays="22" />
    </div>
  );
};

export default TaskDetailsInfoBar;
