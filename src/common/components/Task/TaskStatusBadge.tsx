import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { FC, useState } from "react";
import { HEXCODE_OPACITY_10 } from "../../data/constants";

const TaskStatusBadge: FC = () => {
  const STATUSES = [
    { name: "A0. Backlog", color: "#ff00ff" },
    { name: "A1. Todo", color: "#FF7F50" },
    { name: "B1. In Development", color: "#FF8080" },
    { name: "B2A. Blocked", color: "#52d1ff" },
  ];
  const [selectedStatus, setSelectedStatus] = useState(STATUSES[3]);

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

  return (
    <div>
      <div
        style={{
          color: selectedStatus.color,
          backgroundColor: `${selectedStatus.color}${HEXCODE_OPACITY_10}`,
          borderColor: selectedStatus.color,
          textShadow: `1px 1px 2px ${selectedStatus.color}80`,
        }}
        className="relative w-fit cursor-pointer rounded-lg border-2 px-4 py-1.5 text-sm shadow-md outline-2"
      >
        <div className="font-semibold">{selectedStatus.name}</div>
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
      </div>
    </div>
  );
};

export default TaskStatusBadge;
