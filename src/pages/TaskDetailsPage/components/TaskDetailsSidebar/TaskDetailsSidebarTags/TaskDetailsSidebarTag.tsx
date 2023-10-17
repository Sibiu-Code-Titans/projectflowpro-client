import { Dispatch, FC, SetStateAction } from "react";
import { TaskDetailsSidebarTagModel } from "../../../data/models/TaskDetailsSidebarModels";

type Props = {
  tags: TaskDetailsSidebarTagModel[];
  setTags: Dispatch<SetStateAction<TaskDetailsSidebarTagModel[]>>;
};
const TaskDetailsSidebarTag: FC<Props> = ({ tags, setTags }) => {
  const deleteTag = (id: string) => {
    const filteredTags = tags.filter((tag) => tag.id !== id);

    setTags(filteredTags);
  };

  return (
    <div className="flex flex-wrap items-center gap-x-3">
      {tags.map((tag) => (
        <div
          key={tag.id}
          className="flex cursor-pointer items-center gap-x-1.5 rounded-lg bg-zinc-100 px-2 py-1 text-sm text-zinc-700 shadow-sm transition-all hover:shadow-md active:scale-95"
          onClick={() => deleteTag(tag.id)}
        >
          <div
            className="h-3 w-3 rounded-full shadow-sm"
            style={{
              backgroundColor: tag.color,
            }}
          />
          <div>{tag.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskDetailsSidebarTag;
