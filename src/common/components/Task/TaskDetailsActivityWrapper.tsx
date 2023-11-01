import { FC, PropsWithChildren } from "react";
import TaskDetailsActivityWrapperName from "./TaskDetailsActivityWrapperName";
import TaskPersonImage from "./TaskPersonImage";

const TaskDetailsActivityWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-start gap-x-3">
        <TaskPersonImage
          name="Dimoiu Bogdan"
          url=""
          src="https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1703721600&v=beta&t=5YaJTze9sVm73MdnYYZlAWs5yqu3SwqXLTqfLLuuNbs"
        />
        <div className="truncate">
          <TaskDetailsActivityWrapperName />
          <div className="truncate">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsActivityWrapper;
