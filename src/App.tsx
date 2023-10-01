import { BrowserRouter } from "react-router-dom";
import AppContainer from "./common/components/AppContainer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
