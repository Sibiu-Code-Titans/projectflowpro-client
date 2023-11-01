import { EditorProvider } from "@tiptap/react";
import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { EDITOR_PROVIDER_EXTENSIONS } from "../../../../../../common/data/constants";

type Props = {
  from: string;
  to: string;
};
const TaskDetailsFooterActivityHistoryOther: FC<Props> = ({ from, to }) => {
  return (
    <div className="truncate-prose flex items-center justify-between gap-4 text-sm">
      <EditorProvider
        editable={false}
        extensions={EDITOR_PROVIDER_EXTENSIONS}
        content={from}
        children={undefined}
        editorProps={{
          attributes: {
            class: "w-full",
          },
        }}
      />
      <FaLongArrowAltRight className="text-zinc-500" />
      <EditorProvider
        editable={false}
        extensions={EDITOR_PROVIDER_EXTENSIONS}
        content={to}
        children={undefined}
        editorProps={{
          attributes: {
            class: "w-full",
          },
        }}
      />
    </div>
  );
};

export default TaskDetailsFooterActivityHistoryOther;
