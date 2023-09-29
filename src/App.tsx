import React, { FC } from "react";

type AppProps = {
  salam: string;
};
const App: FC<AppProps> = ({ salam }) => {
  return <div>App</div>;
};

export default App;
