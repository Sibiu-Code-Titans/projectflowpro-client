import { EditorProvider } from "@tiptap/react";
import { useState } from "react";
import TaskDetailsActivityWrapper from "../../../../../../../common/components/Task/TaskDetailsActivityWrapper";
import { EDITOR_PROVIDER_EXTENSIONS } from "../../../../../../../common/data/constants";
import TaskDetailsDescriptionEditMarkdownMenu from "../../../../TaskDetailsContent/TaskDetailsDescription/TaskDetailsDescriptionEditMarkdown/TaskDetailsDescriptionEditMarkdownMenu/TaskDetailsDescriptionEditMarkdownMenu";
import TaskDetailsFooterActivityCommentActions from "./TaskDetailsFooterActivityCommentActions/TaskDetailsFooterActivityCommentActions";

const TaskDetailsFooterActivityComment = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [comment, setComment] = useState(localStorage.getItem("content") || "");

  return (
    <TaskDetailsActivityWrapper>
      <EditorProvider
        key={isEditMode.toString()}
        editable={isEditMode}
        slotBefore={
          isEditMode ? <TaskDetailsDescriptionEditMarkdownMenu /> : <></>
        }
        editorProps={{
          attributes: {
            class: `mt-1 focus-within:border-0 focus-within:outline-none ${
              isEditMode
                ? "shadow-inner p-2 rounded-md shadow-zinc-200 min-h-[75px]"
                : ""
            }`,
          },
        }}
        extensions={EDITOR_PROVIDER_EXTENSIONS}
        content={comment}
        children={undefined}
      />
      <TaskDetailsFooterActivityCommentActions
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </TaskDetailsActivityWrapper>
  );
};

export default TaskDetailsFooterActivityComment;
