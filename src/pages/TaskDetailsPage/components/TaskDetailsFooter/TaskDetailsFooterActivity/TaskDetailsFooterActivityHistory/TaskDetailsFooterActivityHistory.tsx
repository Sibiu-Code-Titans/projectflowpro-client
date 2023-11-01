import { STATUSES } from "../../../../../../common/data/constants";
import { TaskPriorityEnum } from "../../../../../../common/data/models/TaskModels";
import { TaskDetailsActivityHistoryField } from "../../../../data/models/TaskDetailsActivityModels";
import TaskDetailsFooterActivityHistoryElement from "./TaskDetailsFooterActivityHistoryElement";

const TaskDetailsFooterActivityHistory = () => {
  return (
    <div className="mb-6 flex flex-col gap-y-6">
      <TaskDetailsFooterActivityHistoryElement
        field={TaskDetailsActivityHistoryField.assignee}
        assigneeData={{
          from: {
            name: "Bogdan Dimoiu",
            src: "https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw",
            url: "",
          },
          to: {
            name: "Iulian Curelea",
            src: "https://media.licdn.com/dms/image/D4E03AQHH85ODHCh_-Q/profile-displayphoto-shrink_800_800/0/1671533097756?e=1701907200&v=beta&t=vgXDw-_SzFvQGYzL6nnGlN6OWQk32L3_Ll4Sjsamprs",
            url: "",
          },
        }}
      />
      <TaskDetailsFooterActivityHistoryElement
        priorityData={{
          from: TaskPriorityEnum.highest,
          to: TaskPriorityEnum.low,
        }}
        field={TaskDetailsActivityHistoryField.priority}
      />
      <TaskDetailsFooterActivityHistoryElement
        statusData={{
          from: STATUSES[1],
          to: STATUSES[2],
        }}
        field={TaskDetailsActivityHistoryField.status}
      />
      <TaskDetailsFooterActivityHistoryElement
        storyPointsData={{
          from: 5,
          to: 2,
        }}
        field={TaskDetailsActivityHistoryField.storyPoints}
      />
      <TaskDetailsFooterActivityHistoryElement
        otherData={{
          from: `<h1>Salam</h1>`,
          to: `<h1>Test</h1>`,
        }}
        field={TaskDetailsActivityHistoryField.other}
      />
    </div>
  );
};

export default TaskDetailsFooterActivityHistory;
