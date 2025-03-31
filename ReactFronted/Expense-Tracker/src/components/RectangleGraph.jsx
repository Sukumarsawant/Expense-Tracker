import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RectangleGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ($)",
        data: [5000, 7000, 8000, 6000, 9000, 11000],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses ($)",
        data: [4000, 6000, 7000, 5000, 8000, 10000],
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Red color
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows resizing
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Sales & Expenses Overview" },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
  };

  return (
    <div className="w-full max-w-[900px] h-[500px] md:h-[400px] sm:h-[300px] mx-auto bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-center text-lg font-bold mb-2">Stacked Rectangle Graph</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RectangleGraph;
