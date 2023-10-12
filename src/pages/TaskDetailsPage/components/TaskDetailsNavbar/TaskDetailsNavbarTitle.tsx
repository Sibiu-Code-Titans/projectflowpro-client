import { ChangeEvent, useRef, useState } from "react";
import { MAX_N_ROWS } from "../../../../common/data/constants";

const TaskDetailsNavbarTitle = () => {
  const [title, setTitle] = useState("Design");

  const titleRef = useRef<HTMLTextAreaElement | null>(null);

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

  return (
    <div className="w-full px-4">
      <textarea
        className="w-full cursor-pointer resize-none overflow-visible rounded-md bg-transparent px-2 py-0.5 text-xl outline-none transition-all hover:bg-zinc-200"
        onChange={handleChange}
        ref={titleRef}
        rows={1}
        value={title}
      />
    </div>
  );
};

export default TaskDetailsNavbarTitle;
