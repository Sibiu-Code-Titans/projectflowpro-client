import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import TaskDetailsPage from "../pages/TaskDetailsPage/TaskDetailsPage";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/issue/:issueId" element={<TaskDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
