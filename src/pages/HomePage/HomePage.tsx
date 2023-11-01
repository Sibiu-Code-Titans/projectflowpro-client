import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToTask = () => {
    navigate("/task/1");
  };

  return <div onClick={handleGoToTask}>go to task</div>;
};

export default HomePage;
