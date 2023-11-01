import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import { FC, useState } from "react";
import { HEXCODE_OPACITY_10, STATUSES } from "../../data/constants";
import { TaskStatusModel } from "../../data/models/TaskModels";
import { cn } from "../../data/utils";

type Props = {
  isLoading: boolean;
  onChange?: () => void;
  size?: "sm" | "base";
  status: TaskStatusModel;
};
const TaskStatusBadge: FC<Props> = ({
  isLoading,
  size = "base",
  status,
  onChange,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  const getSize = () => {
    switch (size) {
      case "sm":
        return {
          badge: "px-3 py-1 text-xs",
          skeleton: { height: "24px", width: "67px" },
        };
      case "base":
      default:
        return {
          badge: "px-4 py-1.5 text-sm",
          skeleton: { height: "31px", width: "81px" },
        };
    }
  };

  const statusTemplate = (option: any) => {
    return (
      <div
        style={{
          color: option.color,
          backgroundColor: `${option.color}${HEXCODE_OPACITY_10}`,
          borderColor: option.color,
          textShadow: `1px 1px 2px ${option.color}80`,
        }}
        className="relative w-fit cursor-pointer rounded-lg border-2 px-4 py-1.5 text-sm shadow-md outline-2"
      >
        <div className="font-semibold shadow-black drop-shadow-sm">
          {option.name}
        </div>
      </div>
    );
  };

  const badgeClassName = cn(
    getSize().badge,
    "relative w-max cursor-pointer rounded-lg border-2 shadow-md outline-2",
  );

  return (
    <div>
      {isLoading ? (
        <Skeleton
          height={getSize().skeleton.height}
          width={getSize().skeleton.width}
        />
      ) : (
        <div
          style={{
            color: selectedStatus.color,
            backgroundColor: `${selectedStatus.color}${HEXCODE_OPACITY_10}`,
            borderColor: selectedStatus.color,
            textShadow: `1px 1px 2px ${selectedStatus.color}80`,
          }}
          className={badgeClassName}
        >
          <div className="font-semibold">{selectedStatus.name}</div>
          {onChange && (
            <Dropdown
              value={selectedStatus}
              onChange={(e: DropdownChangeEvent) => setSelectedStatus(e.value)}
              options={STATUSES}
              optionLabel="name"
              placeholder="Select a Country"
              className="absolute left-0 top-0 h-full w-full opacity-0"
              panelClassName="w-min"
              itemTemplate={statusTemplate}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TaskStatusBadge;
