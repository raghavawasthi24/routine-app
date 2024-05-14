"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
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

const BarDiagram = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
  };

  const labels = ["01/4", "02/4", "03/4", "25/4", "02/5", "03/5", "04/5"];


  console.log(labels);

  const data = {
    name: "Bar Diagram",
    labels,
    datasets: [
      {
        data: [20, 40, 60, 80, 100, 120, 140],
        backgroundColor: "#5A92CB",
      },
    ],
  };

  return <Bar options={options} data={data} className="my-5" />;
};

export default BarDiagram;