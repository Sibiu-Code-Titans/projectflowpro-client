import { FC } from "react";
import TaskDetailsActivityWrapper from "../../../../../../common/components/Task/TaskDetailsActivityWrapper";
import {
  TaskPriorityEnum,
  TaskStatusModel,
} from "../../../../../../common/data/models/TaskModels";
import {
  TaskDetailsActivityHistoryAssigneeModel,
  TaskDetailsActivityHistoryField,
} from "../../../../data/models/TaskDetailsActivityModels";
import TaskDetailsFooterActivityHistoryAssignee from "./TaskDetailsFooterActivityHistoryAssignee";
import TaskDetailsFooterActivityHistoryOther from "./TaskDetailsFooterActivityHistoryOther";
import TaskDetailsFooterActivityHistoryPriority from "./TaskDetailsFooterActivityHistoryPriority";
import TaskDetailsFooterActivityHistoryStatus from "./TaskDetailsFooterActivityHistoryStatus";
import TaskDetailsFooterActivityHistoryStoryPoints from "./TaskDetailsFooterActivityHistoryStoryPoints";

type Props = {
  field: TaskDetailsActivityHistoryField;
  assigneeData?: {
    from: TaskDetailsActivityHistoryAssigneeModel;
    to: TaskDetailsActivityHistoryAssigneeModel;
  };
  priorityData?: {
    from: TaskPriorityEnum;
    to: TaskPriorityEnum;
  };
  statusData?: {
    from: TaskStatusModel;
    to: TaskStatusModel;
  };
  storyPointsData?: {
    from: number;
    to: number;
  };
  otherData?: {
    from: string;
    to: string;
  };
};
const TaskDetailsFooterActivityHistoryElement: FC<Props> = ({
  field,
  assigneeData,
  priorityData,
  statusData,
  storyPointsData,
  otherData,
}) => {
  const getChildrenContent = () => {
    switch (field) {
      case TaskDetailsActivityHistoryField.assignee: {
        if (!assigneeData?.from || !assigneeData.to) return;

        return (
          <TaskDetailsFooterActivityHistoryAssignee
            from={assigneeData.from}
            to={assigneeData.to}
          />
        );
      }
      case TaskDetailsActivityHistoryField.priority: {
        if (
          typeof priorityData?.from === "undefined" ||
          typeof priorityData.to === "undefined"
        )
          return;

        return (
          <TaskDetailsFooterActivityHistoryPriority
            from={priorityData.from}
            to={priorityData.to}
          />
        );
      }
      case TaskDetailsActivityHistoryField.status: {
        if (!statusData?.from || !statusData.to) return;

        return (
          <TaskDetailsFooterActivityHistoryStatus
            from={statusData.from}
            to={statusData.to}
          />
        );
      }
      case TaskDetailsActivityHistoryField.storyPoints: {
        if (!storyPointsData?.from || !storyPointsData.to) return;

        return (
          <TaskDetailsFooterActivityHistoryStoryPoints
            from={storyPointsData.from}
            to={storyPointsData.to}
          />
        );
      }
      default:
      case TaskDetailsActivityHistoryField.other: {
        if (!otherData?.from || !otherData?.to) return;

        return (
          <TaskDetailsFooterActivityHistoryOther
            from={otherData.from}
            to={otherData.to}
          />
        );
      }
    }
  };

  return (
    <TaskDetailsActivityWrapper>
      {getChildrenContent()}
    </TaskDetailsActivityWrapper>
  );
};

export default TaskDetailsFooterActivityHistoryElement;
