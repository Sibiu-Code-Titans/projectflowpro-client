import { DropdownChangeEvent } from "primereact/dropdown";
import { Dispatch, FC, SetStateAction } from "react";
import { FaBan, FaPlus } from "react-icons/fa";
import TaskDetailsSidebarNewElement from "./TaskDetailsSidebarNewElement";

type Props = {
  addElement: (event: DropdownChangeEvent) => void;
  addNewContent: string;
  elements: any[];
  setShowNewDropdown: Dispatch<SetStateAction<boolean>>;
  showNewDropdown: boolean;
  unselectedElements: any[];
};
const TaskDetailsSidebarAddNew: FC<Props> = ({
  addElement,
  addNewContent,
  elements,
  setShowNewDropdown,
  showNewDropdown,
  unselectedElements,
}) => {
  const noElements = elements.length === 0;
  const noRemainingOptions = unselectedElements.length === 0;

  const getActionIconAndText = () => {
    if (showNewDropdown && !noElements && !noRemainingOptions) {
      return (
        <>
          <FaBan className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95" />
          <span>Close</span>
        </>
      );
    }

    if (!noElements && !noRemainingOptions)
      return (
        <>
          <FaPlus className="cursor-pointer text-purple-500 transition-all hover:scale-105 hover:text-purple-600 active:scale-95" />
          <span>Add {addNewContent}</span>
        </>
      );
  };

  return (
    <>
      {(showNewDropdown || noElements) && !noRemainingOptions ? (
        <TaskDetailsSidebarNewElement
          addNewContent={addNewContent}
          onChange={addElement}
          options={unselectedElements}
        />
      ) : (
        <></>
      )}
      <div
        className="flex cursor-pointer items-center gap-x-1 text-sm text-zinc-600 transition-all hover:text-zinc-700 active:scale-95"
        onClick={() => setShowNewDropdown((prev) => !prev)}
      >
        {getActionIconAndText()}
      </div>
    </>
  );
};

export default TaskDetailsSidebarAddNew;
