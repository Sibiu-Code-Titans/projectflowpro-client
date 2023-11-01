import { BrowserRouter } from "react-router-dom";
import AppContainer from "./common/components/AppContainer";
import Notification from "./common/components/Notification/Notification";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AppContainer>
      <Notification />
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
