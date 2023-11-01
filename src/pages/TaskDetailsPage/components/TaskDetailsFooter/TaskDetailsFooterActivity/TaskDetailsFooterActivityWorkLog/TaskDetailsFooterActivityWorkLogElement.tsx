import { useState } from "react";
import TaskPersonImage from "../../../../../../common/components/Task/TaskPersonImage";
import TaskDetailsFooterActivityCommentActionsUpdateInitiate from "../TaskDetailsFooterActivityComments/TaskDetailsFooterActivityComment/TaskDetailsFooterActivityCommentActions/TaskDetailsFooterActivityCommentActionsUpdate/TaskDetailsFooterActivityCommentActionsUpdateInitiate";
import TaskDetailsFooterActivityWorkLogEditModal from "./TaskDetailsFooterActivityWorkLogEditModal";

const TaskDetailsFooterActivityWorkLogElement = () => {
  const [myWorklog, setMyWorklog] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <div className="flex items-start gap-x-3">
        <TaskPersonImage
          name="Dimoiu Bogdan"
          url=""
          src="https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1703721600&v=beta&t=5YaJTze9sVm73MdnYYZlAWs5yqu3SwqXLTqfLLuuNbs"
        />
        <div>
          <div className="mb-1 flex items-center gap-x-3">
            <div className="text-zinc-700">Dimoiu Bogdan</div>
            <div className="text-zinc-500">logged 8h yesterday</div>
          </div>
          {myWorklog && (
            <TaskDetailsFooterActivityCommentActionsUpdateInitiate
              handleEdit={() => setShowEditModal(true)}
            />
          )}
        </div>
      </div>
      {showEditModal && (
        <TaskDetailsFooterActivityWorkLogEditModal
          onHide={() => {
            setShowEditModal(false);
          }}
        />
      )}
    </div>
  );
};

export default TaskDetailsFooterActivityWorkLogElement;
