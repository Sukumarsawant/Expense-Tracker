import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Food', 'Rent', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
      {
        label: 'Expense Distribution ($)',
        data: [500, 1200, 300, 400, 600], // Change values as needed
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(153, 102, 255, 0.6)', // Purple
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom sizing
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Expense Breakdown' },
    },
  };

  return (
    <div style={{ width: '500px', height: '500px', margin: 'auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
