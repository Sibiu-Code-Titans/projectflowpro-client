import { EditorProvider } from "@tiptap/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { EDITOR_PROVIDER_EXTENSIONS } from "../../../../../../common/data/constants";
import TaskDetailsDescriptionEditMarkdownMenu from "./TaskDetailsDescriptionEditMarkdownMenu/TaskDetailsDescriptionEditMarkdownMenu";

type Props = {
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
  isEditMode: boolean;
};
const TaskDetailsDescriptionEditMarkdown: FC<Props> = ({
  setIsEditMode,
  isEditMode,
}) => {
  const [content, setContent] = useState<any>(localStorage.getItem("content"));

  const saveToLocalStorage = () => {
    localStorage.setItem("content", content);
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [content]);

  return (
    <EditorProvider
      onFocus={() => setIsEditMode(true)}
      slotBefore={
        isEditMode ? <TaskDetailsDescriptionEditMarkdownMenu /> : <></>
      }
      editorProps={{
        attributes: {
          class:
            "shadow-inner bg-zinc-200/10 hover:bg-zinc-200/20 min-h-[250px] min-w-full text-base transition-all p-2 focus-within:outline-none max-h-[500px] overflow-y-scroll shadow-zinc-200 focus-within:border-0 rounded-md",
        },
      }}
      onUpdate={({ editor }) => setContent(editor.getHTML())}
      extensions={EDITOR_PROVIDER_EXTENSIONS}
      content={content}
      children={undefined}
    />
  );
};

export default TaskDetailsDescriptionEditMarkdown;
