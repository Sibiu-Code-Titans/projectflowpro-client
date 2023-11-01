import { FC } from "react";
import { cn } from "../../data/utils";

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
        "flex w-fit cursor-pointer items-center gap-x-2 rounded-lg bg-zinc-800 bg-opacity-90 px-2 py-1 font-medium text-white shadow-sm transition hover:bg-opacity-95 hover:shadow-md active:scale-95 active:bg-opacity-100 active:shadow-sm",
        className,
      )}
    >
      {leftIcon}
      {content}
      {rightIcon}
    </div>
  );
};

export default PROButton;
