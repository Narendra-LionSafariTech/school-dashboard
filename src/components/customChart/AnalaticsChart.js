import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticsChart = ({ data }) => {
  const chartData = {
    labels: ['Total Candidates', 'Present', 'Absent'],
    datasets: [
      {
        label: 'Candidates',
        data: [
          data.totalCandidates,
          data.verificationDetails.present,
          data.verificationDetails.absent,
        ],
        backgroundColor: ['#42a5f5', '#66bb6a', '#ef5350'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default AnalyticsChart;
