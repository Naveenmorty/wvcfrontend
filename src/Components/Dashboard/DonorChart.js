import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { textSecondaryColor } from '../Styles/Style'

const DonorChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'New Donor',
                data: [50, 80, 120, 150, 160, 180, 200, 220],
                fill: '#E86100',
            },
            {
                name: 'Existing Donor',
                data: [90, 130, 160, 190, 200, 220, 250, 280],
                fill: '#1049A9',
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                fontFamily: `"Hanken Grotesk", "sans-serif"`,
                toolbar: {
                    show: false,
                },
            },
            grid: {
                show: false, // Set show to false to hide background lines
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            markers: {
                size: 6,
                colors: ['#fff'],
                strokeWidth: 2,
                strokeColors: ['#1049A9'],
                hover: {
                    size: 7
                },
            },
            xaxis: {
                type: 'category',
                categories: [`JAN’22`, `APR’22`, `JUL’22`, `OCT’22`, `JAN’23`, `APR’23`, `JUL’23`, `OCT’23`],
                labels: {
                    style: {
                        fontSize: '15px',
                        fontFamily: `"Hanken Grotesk", "sans-serif"`,
                        colors: `${textSecondaryColor}`,
                    },
                },
            },
            yaxis: {
                title: {
                },
                labels: {
                    formatter: function (value) {
                        return `$${value}`;
                    },
                    style: {
                        fontSize: '15px',
                        fontFamily: `"Hanken Grotesk", "sans-serif"`,
                        colors: `${textSecondaryColor}`,
                    },
                },
            },
            tooltip: {
                x: {
                    format: 'MMM',
                },
                y: {
                    formatter: function (value) {
                        return `$${value}`;
                    },
                },
            },
            colors: ['#1049A9', '#E86100'],
            legend: {
                fontSize: 14,
                labels: {
                    colors: `${textSecondaryColor}`,
                },
               
            }
        },
    });

    const getStrokeColors = () => {
        const { series } = chartData;
        return series.map((item) => {
            return item.name === 'New Donor' ? '#1049A9' : '#E86100';
        });
    };
    React.useEffect(() => {
        setChartData((prevChartData) => ({
            ...prevChartData,
            options: {
                ...prevChartData.options,
                markers: {
                    ...prevChartData.options.markers,
                    strokeColors: getStrokeColors(),
                },
            },
        }));
    }, [chartData]);

    return (
        <div id="chart" class="Donor_Chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={320}
            // width={640}
            />
        </div>
    );
};

export default DonorChart;
