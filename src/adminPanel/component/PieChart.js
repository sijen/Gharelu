import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["ELECTRONICS", "FURNITURE", "TOYS"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "ELECTRONICS",
      backgroundColor: ["#904BFF", "#FF0000", "#463131"],
      borderColor: ["#904BFF", "#FF0000", "#463131"],
      data: [85, 10, 5],
    },
  ],
};
const PieChart = () => {
  return (
    <div className="col-4 chartbox">
      <h2 className="charttitlebox">TOP CATEGORY</h2>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
