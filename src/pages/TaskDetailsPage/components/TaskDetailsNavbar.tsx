import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import PROButton from "../../../common/components/PROButton";
import TaskStatusBadge from "../../../common/components/Task/TaskStatusBadge";

const TaskDetailsNavbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSave = () => {};

  return (
    <div className="px-4">
      <PROButton
        content="Back to tasks"
        leftIcon={<FaChevronLeft />}
        onClick={handleGoBack}
        className="gap-x-4 pl-4 pr-10 py-1.5 mb-4 rounded-full"
      />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-6 text-lg font-semibold">
          <TaskStatusBadge color="#00f957" content="A2. UI Design" />
          <div>Design styleguide and fluid grid system</div>
        </div>
        <div className="flex items-center gap-x-2">
          <PROButton
            content="Save"
            className="rounded-xl py-3 px-9 text-sm bg-purple-500"
            onClick={handleSave}
          />
          <PROButton
            content="Close Task"
            className="rounded-xl py-3 px-9 text-sm bg-purple-100 text-purple-500"
            onClick={handleGoBack}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsNavbar;
