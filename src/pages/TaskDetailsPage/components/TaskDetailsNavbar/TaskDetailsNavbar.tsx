import { Skeleton } from "primereact/skeleton";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import PROButton from "../../../../common/components/PRO/PROButton";
import TaskStatusBadge from "../../../../common/components/Task/TaskStatusBadge";
import { STATUSES } from "../../../../common/data/constants";
import { useGetTaskDetailsNavbarDataQuery } from "../../data/reducers/taskDetailsPageReducer/taskDetailsPageApi";
import TaskDetailsNavbarTitle from "./TaskDetailsNavbarTitle";

const TaskDetailsNavbar = () => {
  const navigate = useNavigate();
  const { taskId } = useParams<{ taskId: string }>();
  const { isLoading } = useGetTaskDetailsNavbarDataQuery(taskId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {isLoading ? (
        <Skeleton height="31px" width="170px" className="mb-4" />
      ) : (
        <PROButton
          content="Back to tasks"
          leftIcon={<FaChevronLeft />}
          onClick={handleGoBack}
          className="mb-4 gap-x-4 rounded-full py-1.5 pl-4 pr-10"
        />
      )}
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-1 items-center text-lg font-semibold">
          <TaskStatusBadge
            isLoading={isLoading}
            onChange={() => {}}
            status={STATUSES[1]}
          />
          <TaskDetailsNavbarTitle />
        </div>
        <div className="flex items-center gap-x-2">
          {isLoading ? (
            <Skeleton height="39px" width="94px" />
          ) : (
            <PROButton
              content="Save"
              className="rounded-xl bg-purple-500 px-9 py-3 text-sm"
              onClick={() => {}}
            />
          )}
          {isLoading ? (
            <Skeleton height="39px" width="130px" />
          ) : (
            <PROButton
              content="Close Task"
              className="rounded-xl bg-purple-100 px-9 py-3 text-sm text-purple-500"
              onClick={handleGoBack}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsNavbar;
