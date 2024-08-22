import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ datas, color }) => {
    const data = {
        labels: ['2021', '2022'], // x-axis labels
        datasets: [
            {
                label: 'Rate %',
                data: datas, // y-axis data corresponding to the x-axis labels
                backgroundColor: color,
                // borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10, // y-axis increments by 10
                },
                title: {
                    display: true,
                    text: 'Rate %', // y-axis label
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Year', // x-axis label
                },
            },
        },
    };

    return <Bar data={data} options={options} width={170} height={130} />;
};

export default BarChart;