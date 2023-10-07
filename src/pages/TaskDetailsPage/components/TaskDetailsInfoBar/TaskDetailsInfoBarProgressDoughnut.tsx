import { Chart } from "primereact/chart";
import { FC } from "react";

type Props = {
  progress: number;
};
const TaskDetailsInfoBarProgressDoughnut: FC<Props> = ({ progress }) => {
  const rest = 100 - progress;
  const chartData = {
    datasets: [
      {
        data: [progress, rest],
        backgroundColor: ["rgb(168 85 247)", "rgb(250 245 255)"],
      },
    ],
  };

  const chartOptions = {
    cutout: "65%",
  };

  return (
    <Chart
      type="doughnut"
      data={chartData}
      options={chartOptions}
      className="h-16"
    />
  );
};

export default TaskDetailsInfoBarProgressDoughnut;
