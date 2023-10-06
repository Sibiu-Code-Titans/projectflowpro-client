import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import TaskDetailsPage from "../pages/TaskDetailsPage/TaskDetailsPage";
import { HOME_PAGE_ROUTE, TASK_PAGE_ROUTE } from "./routes";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={TASK_PAGE_ROUTE} element={<TaskDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
