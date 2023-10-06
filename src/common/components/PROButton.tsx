import { FC } from "react";
import { cn } from "../data/utils";

type Props = {
  className?: string;
  content: string;
  leftIcon?: JSX.Element;
  onClick: () => void;
  rightIcon?: JSX.Element;
};
const PROButton: FC<Props> = ({
  className,
  content,
  leftIcon,
  onClick,
  rightIcon,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-lg flex items-center cursor-pointer transition hover:shadow-md active:shadow-sm active:scale-95 gap-x-2 shadow-sm bg-zinc-800 bg-opacity-90 hover:bg-opacity-95 active:bg-opacity-100 w-fit px-2 py-1 text-white font-medium",
        className
      )}
    >
      {leftIcon}
      {content}
      {rightIcon}
    </div>
  );
};

export default PROButton;
