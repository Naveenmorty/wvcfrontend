import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { textSecondaryColor, PrimaryColor, SecondaryColor } from '../Styles/Style'

const FundraiserChart = () => {
    const seriesData = [880, 338];
    const totalValue = seriesData.reduce((total, value) => total + value, 0);
    const chartData = {
        series: seriesData,
        options: {
            chart: {
                type: 'donut',
                fontFamily: `"Hanken Grotesk", "sans-serif"`,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '55%',
                        labels: {
                            show: true,
                            value: {
                                fontSize: '30px',
                                fontWeight: '600',
                                colors: `${PrimaryColor}`,
                            },
                            total: {
                                Text: `${totalValue}`,
                                show: true,
                                label: `Total Fundraiser:`,
                                color: `${SecondaryColor}`,
                                fontSize: 14,
                            }
                        },
                    },
                },
            },
            labels: ['Active users', 'In-active users'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
            dataLabels: {
                enabled: false,
            },
            colors: ['#0C6699', '#00ACCA'],
            legend: {
                fontSize: '14px',
                labels: {
                    colors: `${PrimaryColor}`,
                },
                formatter: function (seriesName, opts) {
                    const count = opts.w.globals.series[opts.seriesIndex];
                    return `${seriesName} - <span style="color: #17191F; font-weight: 600;">${count}</span>`;
                },
                markers: {
                    width: 16,
                    height: 16,
                    strokeWidth: 0,
                    radius: 2,
                },
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
            // height={450}
            // width={450} 
            />
        </div>
    );
};

export default FundraiserChart;
