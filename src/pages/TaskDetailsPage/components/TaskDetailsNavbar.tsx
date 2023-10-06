import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import PROButton from "../../../common/components/PROButton";
import TaskStatusBadge from "../../../common/components/Task/TaskStatusBadge";

const TaskDetailsNavbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    // Make request to BE to save changes
  };

  return (
    <div>
      <PROButton
        content="Back to tasks"
        leftIcon={<FaChevronLeft />}
        onClick={handleGoBack}
        className="mb-4 gap-x-4 rounded-full py-1.5 pl-4 pr-10"
      />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-6 text-lg font-semibold">
          <TaskStatusBadge color="#00f957" content="A2. UI Design" />
          <div>Design styleguide and fluid grid system</div>
        </div>
        <div className="flex items-center gap-x-2">
          <PROButton
            content="Save"
            className="rounded-xl bg-purple-500 px-9 py-3 text-sm"
            onClick={handleSave}
          />
          <PROButton
            content="Close Task"
            className="rounded-xl bg-purple-100 px-9 py-3 text-sm text-purple-500"
            onClick={handleGoBack}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsNavbar;
