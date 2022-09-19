import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Laptop",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Headset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 20, 53, 22, 10, 31, 25],
    },
    {
      label: "Monitor",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [5, 2, 52, 12, 12, 34, 23],
    },
    {
      label: "Phones",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [12, 23, 13, 52, 10, 15, 25],
    },
  ],
};

export const LineChart = () => {
  return (
    <div className="col-7 chartbox">
      <Line data={data} />
    </div>
  );
};
