import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
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

  // TODO - To be implemented in the future
  const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
      return null;
    }

    return (
      <>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          redo
        </button>
      </>
    );
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("content", content);
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [content]);

  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle,
    Underline,
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ];

  return (
    <EditorProvider
      onFocus={() => setIsEditMode(true)}
      slotBefore={
        isEditMode ? <TaskDetailsDescriptionEditMarkdownMenu /> : <></>
      }
      editorProps={{
        attributes: {
          class:
            "shadow-inner min-h-[50px] min-w-full text-base transition-all hover:bg-zinc-200/30 p-2 focus-within:outline-none focus-within:bg-zinc-200/30 focus-within:border-0 rounded-md",
        },
      }}
      onUpdate={({ editor }) => setContent(editor.getHTML())}
      extensions={extensions}
      content={content}
      children={undefined}
    />
  );
};

export default TaskDetailsDescriptionEditMarkdown;
