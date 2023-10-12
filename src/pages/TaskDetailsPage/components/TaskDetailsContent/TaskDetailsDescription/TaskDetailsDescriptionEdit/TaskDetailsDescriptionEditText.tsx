import { FaChevronDown } from "react-icons/fa";

const TaskDetailsDescriptionEditText = () => {
  return (
    <div className="flex cursor-pointer items-center gap-x-2 p-2 transition-all hover:bg-zinc-100 hover:shadow-md active:scale-95">
      Normal Text
      <FaChevronDown />
    </div>
  );
};

export default TaskDetailsDescriptionEditText;
