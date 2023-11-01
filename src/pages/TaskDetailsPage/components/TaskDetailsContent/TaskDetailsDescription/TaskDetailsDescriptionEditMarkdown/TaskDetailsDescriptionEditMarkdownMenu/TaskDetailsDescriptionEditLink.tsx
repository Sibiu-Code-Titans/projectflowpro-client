import { Editor, useCurrentEditor } from "@tiptap/react";
import { useCallback } from "react";
import { FaLink } from "react-icons/fa";
import { cn } from "../../../../../../../common/data/utils";

const TaskDetailsDescriptionEditLink = () => {
  const { editor } = useCurrentEditor();

  const setLink = useCallback(
    (editor: Editor) => {
      const previousUrl = editor.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);

      if (url === null) {
        return;
      }

      if (url === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();

        return;
      }

      // update link
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },
    [editor],
  );

  if (!editor) return;

  return (
    <div
      onClick={() => setLink(editor)}
      className={cn(
        editor.isActive("link") ? "rounded-md bg-zinc-200" : "",
        "tiptap-markdown-option",
      )}
    >
      <FaLink />
    </div>
  );
};

export default TaskDetailsDescriptionEditLink;
