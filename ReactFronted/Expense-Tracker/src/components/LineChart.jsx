import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Expenses ($)',
        data: [400, 600, 800, 500, 700, 900],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important for resizing
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Expense Trends' },
    },
  };

  return (
    <div className="w-full max-w-[900px] h-[500px] md:h-[400px] sm:h-[300px] mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
