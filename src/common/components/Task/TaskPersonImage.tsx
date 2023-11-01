import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../data/utils";

type Props = {
  name: string;
  url: string;
  src: string;
  size?: "sm" | "base";
};
const TaskPersonImage: FC<Props> = ({ name, src, url, size = "base" }) => {
  const navigate = useNavigate();

  const redirectToUrl = () => {
    navigate(url);
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-8 w-8";
      case "base":
      default:
        return "h-12 w-12";
    }
  };

  const imageClassName = cn(
    getSize(),
    "cursor-pointer rounded-full shadow-sm transition-all hover:scale-105 active:scale-95",
  );

  return (
    <img
      onClick={redirectToUrl}
      title={name}
      src={src}
      alt={name.replace(" ", "-")}
      className={imageClassName}
    />
  );
};

export default TaskPersonImage;
