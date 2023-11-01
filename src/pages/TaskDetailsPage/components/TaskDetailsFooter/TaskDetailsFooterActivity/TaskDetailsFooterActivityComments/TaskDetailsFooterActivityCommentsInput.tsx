import { EditorProvider } from "@tiptap/react";
import { useState } from "react";
import TaskPersonImage from "../../../../../../common/components/Task/TaskPersonImage";
import { EDITOR_PROVIDER_EXTENSIONS } from "../../../../../../common/data/constants";
import TaskDetailsDescriptionEditMarkdownMenu from "../../../TaskDetailsContent/TaskDetailsDescription/TaskDetailsDescriptionEditMarkdown/TaskDetailsDescriptionEditMarkdownMenu/TaskDetailsDescriptionEditMarkdownMenu";
import TaskDetailsFooterActivityCommentActionsUpdateFinish from "./TaskDetailsFooterActivityComment/TaskDetailsFooterActivityCommentActions/TaskDetailsFooterActivityCommentActionsUpdate/TaskDetailsFooterActivityCommentActionsUpdateFinish";

const TaskDetailsFooterActivityCommentsInput = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<any>(localStorage.getItem("content"));

  return (
    <div className="flex gap-x-3">
      <TaskPersonImage
        name="Dimoiu Bogdan"
        url=""
        src="https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw"
      />
      <div className="w-full truncate">
        <EditorProvider
          onFocus={() => setIsEditMode(true)}
          slotBefore={
            isEditMode ? <TaskDetailsDescriptionEditMarkdownMenu /> : <></>
          }
          slotAfter={
            isEditMode && (
              <TaskDetailsFooterActivityCommentActionsUpdateFinish
                setIsEditMode={setIsEditMode}
              />
            )
          }
          editorProps={{
            attributes: {
              class:
                "shadow-inner bg-zinc-200/10 hover:bg-zinc-200/20 min-w-full text-base transition-all p-2 min-h-[75px] focus-within:outline-none shadow-zinc-200 focus-within:border-0 rounded-md",
            },
          }}
          onUpdate={({ editor }) => setContent(editor.getHTML())}
          extensions={EDITOR_PROVIDER_EXTENSIONS}
          content={content}
          children={undefined}
        />
      </div>
    </div>
  );
};

export default TaskDetailsFooterActivityCommentsInput;
