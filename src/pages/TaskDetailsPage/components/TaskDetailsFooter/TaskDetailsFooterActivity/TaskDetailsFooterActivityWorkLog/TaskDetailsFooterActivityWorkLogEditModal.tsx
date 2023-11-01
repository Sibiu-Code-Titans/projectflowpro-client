import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { ProgressBar } from "primereact/progressbar";
import { Nullable } from "primereact/ts-helpers";
import { FC, useState } from "react";
import PROButton from "../../../../../../common/components/PRO/PROButton";
import PRODialog from "../../../../../../common/components/PRO/PRODialog";

type Props = {
  onHide: () => void;
};
const TaskDetailsFooterActivityWorkLogEditModal: FC<Props> = ({ onHide }) => {
  const [spentTime, setSpentTime] = useState("8h");
  const [remainingTime, setRemainingTime] = useState("8h");
  const [totalTime, setTotalTime] = useState("16h");
  const [startingDate, setStartingDate] = useState<Nullable<Date>>(new Date());

  return (
    <PRODialog visible={true} header="Edit work log" onHide={onHide}>
      <div className="mb-4">
        <ProgressBar
          value={50}
          pt={{
            value: {
              style: {
                background: "linear-gradient(to right, #8e2de2, #4a00e0)",
              },
            },
          }}
        />
        <div className="flex items-center justify-between text-zinc-600">
          <div>{spentTime} logged</div>
          <div>{totalTime} total</div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-x-4">
        <div className="w-1/2">
          <div className="text-sm text-zinc-500">Time spent</div>
          <InputText
            className="w-full border-1 px-2 py-1 shadow-md focus-within:outline-none"
            value={spentTime}
            onChange={(e) => setSpentTime(e.target.value)}
          />
        </div>

        <div className="p-float-label w-1/2">
          <div className="text-sm text-zinc-500">Time remaining</div>
          <InputText
            className="w-full border-1 px-2 py-1 shadow-md focus-within:outline-none"
            value={remainingTime}
            onChange={(e) => setRemainingTime(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-1">Use the format: 2w 4d 6h 45m</div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-zinc-500">w = weeks</div>
          <div className="text-zinc-500">d = days</div>
          <div className="text-zinc-500">h = hours</div>
          <div className="text-zinc-500">m = minutes</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-sm text-zinc-500">Starting date</div>
        <div className="flex items-center gap-x-4">
          <Calendar
            value={startingDate}
            onChange={(e) => setStartingDate(e.value)}
            inputClassName="focus-within:outline-none"
            className="w-1/2 rounded-md border-1 px-2 py-1 shadow-md"
            showButtonBar
            clearButtonClassName="mr-4"
            todayButtonClassName="ml-4"
          />
          <Calendar
            value={startingDate}
            onChange={(e) => setStartingDate(e.value)}
            inputClassName="focus-within:outline-none"
            className="w-1/2 rounded-md border-1 px-2 py-1 shadow-md"
            timeOnly
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-3">
        <PROButton
          className="bg-purple-500 px-2 py-1"
          content="Save"
          onClick={() => {}}
        />
        <PROButton
          className="bg-purple-100 px-2 py-1 text-purple-500"
          content="Cancel"
          onClick={onHide}
        />
      </div>
    </PRODialog>
  );
};

export default TaskDetailsFooterActivityWorkLogEditModal;
