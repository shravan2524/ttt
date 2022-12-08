import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    }
  }
};



export default function Chart({elements , frequency}) {
    const labels = frequency
    console.log(elements, frequency);
    const data = {
        labels,
        datasets: [
          {
            label: "Top 20 words having highest frequency",
            data: elements, 
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          }
        ]
      };
  return (
    <Bar options={options} data={data} />
  )
}
