import { FC } from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

type Props = {
  currentUserSubscribed: boolean;
  handleSubscribe: () => void;
};
const TaskDetailsSidebarSubscribedAction: FC<Props> = ({
  currentUserSubscribed,
  handleSubscribe,
}) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-x-1 text-sm text-zinc-600 transition-all hover:text-zinc-700 active:scale-95"
      onClick={handleSubscribe}
    >
      {currentUserSubscribed ? (
        <FaUserMinus className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95" />
      ) : (
        <FaUserPlus className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95" />
      )}
      <span>{currentUserSubscribed ? "Unsubscribe" : "Subscribe"}</span>
    </div>
  );
};

export default TaskDetailsSidebarSubscribedAction;
