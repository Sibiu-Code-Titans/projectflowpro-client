import { DropdownChangeEvent } from "primereact/dropdown";
import { useState } from "react";
import TaskDetailsSidebarAddNew from "../../../../../common/components/Task/TaskDetailsSidebarNewPerson/TaskDetailsSidebarAddNew";
import { ALL_TAGS } from "../../../../../common/data/constants";
import { TaskDetailsSidebarTagModel } from "../../../data/models/TaskDetailsSidebarModels";
import TaskDetailsSidebarTag from "./TaskDetailsSidebarTag";

const TaskDetailsSidebarTags = () => {
  const TAGS = [
    {
      id: "1",
      name: "Frontend",
      color: "#ff0000",
    },
    {
      id: "2",
      name: "Backend",
      color: "#0000ff",
    },
  ];
  const [tags, setTags] = useState<TaskDetailsSidebarTagModel[]>(TAGS);
  const [showNewTagsDropdown, setShowNewTagsDropdown] = useState(false);

  const unselectedTags = ALL_TAGS.filter(
    (person) => !tags.find((tag) => tag.id === person.id),
  );

  const addTag = (event: DropdownChangeEvent) => {
    setTags((prev) => [...prev, event.target.value]);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-sm font-medium text-zinc-700">Tags</div>
      <TaskDetailsSidebarTag tags={tags} setTags={setTags} />

      <TaskDetailsSidebarAddNew
        addElement={addTag}
        addNewContent="tag"
        elements={tags}
        setShowNewDropdown={setShowNewTagsDropdown}
        showNewDropdown={showNewTagsDropdown}
        unselectedElements={unselectedTags}
      />
    </div>
  );
};

export default TaskDetailsSidebarTags;
