import { Divider } from "primereact/divider";
import { Skeleton } from "primereact/skeleton";
import { useParams } from "react-router-dom";
import { useGetTaskDetailsInfoBarDataQuery } from "../../../data/reducers/taskDetailsPageReducer/taskDetailsPageApi";
import TaskDetailsInfoBarProgressDoughnut from "./TaskDetailsInfoBarProgressDoughnut";
import TaskDetailsInfoBarRemainingDays from "./TaskDetailsInfoBarRemainingDays";
import TaskDetailsInfoBarSection from "./TaskDetailsInfoBarSection";

const TaskDetailsInfoBar = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { data, isLoading } = useGetTaskDetailsInfoBarDataQuery(taskId);

  return (
    <div className="flex h-fit items-center justify-between rounded-xl bg-white p-6 shadow-sm">
      {isLoading ? (
        <Skeleton width="113px" height="42px" />
      ) : (
        <TaskDetailsInfoBarSection
          dotColor="bg-purple-400"
          label="Date created"
          value={data?.created_at.toString()}
        />
      )}
      {isLoading ? (
        <Skeleton width="103px" height="42px" />
      ) : (
        <TaskDetailsInfoBarSection
          dotColor="bg-sky-400"
          label="Last update"
          value={data?.last_update.toString()}
        />
      )}
      {isLoading ? (
        <div className="flex items-center gap-x-4">
          <Skeleton width="118px" height="42px" />
          <Skeleton width="56px" height="56px" borderRadius="100%" />
        </div>
      ) : (
        <TaskDetailsInfoBarSection
          dotColor="bg-emerald-400"
          label="Progress"
          value={`${data?.progress}% Completed`}
          rightContent={
            <TaskDetailsInfoBarProgressDoughnut progress={data?.progress} />
          }
        />
      )}
      <Divider layout="vertical" className="mx-0 w-0.5 bg-zinc-100" />
      {isLoading ? (
        <Skeleton width="92px" height="42px" />
      ) : (
        <TaskDetailsInfoBarSection
          dotColor="bg-red-400"
          label="Deadline"
          value={data?.end_date.toString()}
        />
      )}
      {isLoading ? (
        <Skeleton width="63px" height="42px" />
      ) : (
        <TaskDetailsInfoBarRemainingDays remainingDays="22" />
      )}
    </div>
  );
};

export default TaskDetailsInfoBar;
