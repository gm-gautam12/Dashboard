import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  y: {
    ticks: {
      stepSize: 100,
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: [500, 350, 200, 400],
      backgroundColor: "#E9A0A0",
    },
    {
      label: "User",
      data: [400, 450, 300, 350],
      backgroundColor: "#9BDD7C",
    },
  ],
};

const Chart1 = () => {
  return <Bar options={options} data={data} />;
};

export default Chart1;
