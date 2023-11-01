import { FaTasks } from "react-icons/fa";
import TaskDetailsSubheader from "../../../../../common/components/Task/TaskDetailsSubheader";
import { STATUSES } from "../../../../../common/data/constants";
import { TaskPriorityEnum } from "../../../../../common/data/models/TaskModels";
import TaskDetailsFooterRelatedTask from "./TaskDetailsFooterRelatedTask";

const TaskDetailsFooterRelatedTasks = () => {
  return (
    <div>
      <TaskDetailsSubheader icon={<FaTasks />} label="Related Tasks" />
      <div className="mt-3 flex flex-col gap-y-2 rounded-b-md bg-white">
        <TaskDetailsFooterRelatedTask
          priority={TaskPriorityEnum.high}
          status={STATUSES[1]}
          assignedUser="https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw"
          id="PRO-1"
          title="This is task 1 alo alodsaiufbewfwsa bfewibfisdbufewfbu bfewbufdsbiub fewbudsibufbdsuibnufewbufdsbu"
        />
        <TaskDetailsFooterRelatedTask
          priority={TaskPriorityEnum.highest}
          status={STATUSES[2]}
          assignedUser="https://media.licdn.com/dms/image/D4D03AQFHaxDTCNnEXQ/profile-displayphoto-shrink_800_800/0/1685466156795?e=1701907200&v=beta&t=fGAsu5L4sMJ4N9aks4ZKS5_D3fYZsQ-Ffh75-PfSiEw"
          id="PRO-2"
          title="This is task 2"
        />
        <TaskDetailsFooterRelatedTask
          priority={TaskPriorityEnum.medium}
          status={STATUSES[3]}
          assignedUser="https://media.licdn.com/dms/image/D4E35AQGLfmRiXaiEdA/profile-framedphoto-shrink_800_800/0/1686831931072?e=1698696000&v=beta&t=EsfPqL3z9-fIY_HokVyvm_srcuCXWMoMLw8b959m8Ac"
          id="PRO-3"
          title="This is task 3"
        />
        <TaskDetailsFooterRelatedTask
          priority={TaskPriorityEnum.low}
          status={STATUSES[2]}
          assignedUser="https://media.licdn.com/dms/image/D4D03AQFxieSDkBgAgw/profile-displayphoto-shrink_800_800/0/1688561842943?e=1701907200&v=beta&t=3yiTPnlUQmuUi_mJHybCD_Bo6-EsWx1xo8KMt_2cKv0"
          id="PRO-4"
          title="This is task 4"
        />
        <TaskDetailsFooterRelatedTask
          priority={TaskPriorityEnum.lowest}
          status={STATUSES[2]}
          assignedUser="https://media.licdn.com/dms/image/D4D03AQFxieSDkBgAgw/profile-displayphoto-shrink_800_800/0/1688561842943?e=1701907200&v=beta&t=3yiTPnlUQmuUi_mJHybCD_Bo6-EsWx1xo8KMt_2cKv0"
          id="PRO-5"
          title="This is task 5"
        />
      </div>
    </div>
  );
};

export default TaskDetailsFooterRelatedTasks;
