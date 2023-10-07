import { FC, ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}
const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-100 px-2 text-primary">{children}</div>
  );
};

export default AppContainer;
