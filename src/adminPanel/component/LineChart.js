import React from "react";
import Chart from "chart.js/auto";
import blacksetting from "../../assets/icons/blacksetting.png";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Laptop",
      backgroundColor: "#904BFF",
      borderColor: "#904BFF",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Headset",
      backgroundColor: "#FF0000",
      borderColor: "#FF0000",
      data: [0, 20, 53, 22, 10, 31, 25],
    },
    {
      label: "Monitor",
      backgroundColor: "#463131",
      borderColor: "#463131",
      data: [5, 2, 52, 12, 12, 34, 23],
    },
    {
      label: "Phones",
      backgroundColor: "#2FAA2D",
      borderColor: "#2FAA2D",
      data: [12, 23, 13, 52, 10, 15, 25],
    },
  ],
};

export const LineChart = () => {
  return (
    <div className="col-7 chartbox">
      <div className="charttitlebox">
        <h1>SALES PERFORMANCE</h1>
        <img src={blacksetting} alt="no image" />
      </div>
      <Line data={data} />
    </div>
  );
};
