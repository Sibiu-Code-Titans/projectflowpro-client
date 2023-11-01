import { Skeleton } from "primereact/skeleton";
import { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { MAX_N_ROWS } from "../../../../common/data/constants";
import { useGetTaskDetailsNavbarDataQuery } from "../../data/reducers/taskDetailsPageReducer/taskDetailsPageApi";

const TaskDetailsNavbarTitle = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { data, isLoading } = useGetTaskDetailsNavbarDataQuery(taskId);
  const titleRef = useRef<HTMLTextAreaElement | null>(null);

  const [title, setTitle] = useState(data?.title);

  const setHeight = () => {
    const element = titleRef.current;

    if (element) {
      element.style.height = "auto";

      const newHeight = Math.min(
        element.scrollHeight,
        MAX_N_ROWS * parseInt(getComputedStyle(element).lineHeight, 10),
      );
      element.style.height = `${newHeight}px`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHeight();

    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle(data?.title);
  }, [data?.title]);

  return (
    <div className="w-full px-4">
      {isLoading ? (
        <Skeleton height="28px" />
      ) : (
        <textarea
          className="w-full cursor-text resize-none overflow-visible rounded-md bg-transparent px-2 py-0.5 text-xl outline-none transition-all hover:bg-zinc-200/30"
          onChange={handleChange}
          ref={titleRef}
          rows={1}
          value={title}
        />
      )}
    </div>
  );
};

export default memo(TaskDetailsNavbarTitle);
