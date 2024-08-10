import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";
import "./Stakedcoins.css"; // Ensure the CSS path is correct

// Register components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const StakedCoins = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["2024-07-01", "2024-08-01"],
    datasets: [
      {
        label: "Total Staked Coins",
        data: [1000, 1500],
        borderColor: "#00FFFF",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#FFFFFF",
        },
      },
      y: {
        title: {
          display: true,
          text: "No of Token",
          color: "#FFFFFF",
        },
        beginAtZero: true,
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="staked-coins-container">
      <h1 className="title">Staked Coins</h1>
      <table className="staked-coins-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>No of Token</th>
            <th>Plan Selected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2024-07-01</td>
            <td>1000</td>
            <td>
              Start Date: 2024-07-01
              <br />
              End Date: 2025-07-01
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2024-08-01</td>
            <td>1500</td>
            <td>
              Start Date: 2024-08-01
              <br />
              End Date: 2025-08-01
            </td>
          </tr>
        </tbody>
      </table>
      <div className="chart-container">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default StakedCoins;