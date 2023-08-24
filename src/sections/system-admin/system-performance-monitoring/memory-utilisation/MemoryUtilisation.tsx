import { Box, Card, Grid, Typography, useTheme } from '@mui/material'
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react'
import { dataUsageHeading } from '.';

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const MemoryUtilisation = () => {
    const theme = useTheme();

    const MemoryUsageSeries = [
        {
            name: "High - 2013",
            data: [30, 60, 70, 20, 10, 32, 56]
        },
    ]
    const MemoryUsageOptions: ApexOptions = {
        chart: {
            height: 280,
            type: 'line',
            fontFamily: "Montserrat,Public Sans,sans-serif",
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        tooltip: {
            theme: theme.palette.mode === "light" ? "light" : "dark"
        },
        colors: ['#0E918C'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#f5f5f5',
            row: {
                colors: ['transparent'], // takes an array which will be repeated on columns
                opacity: 1
            },
        },
        markers: {
            size: 6
        },
        xaxis: {
            title: {
                text: '',
            },
            labels: {
                style: {
                    colors: theme.palette.mode === 'light' ? "#6E7191" : '#fff',
                    fontWeight: 500
                }
            },
            categories: ['07:50', '07:55', '08:00', '08:05', '08:10', '08:15', '08:20'],
        },
        yaxis: {
            title: {
                text: ''
            },
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: {
                style: {
                    colors: theme.palette.mode === 'light' ? "#6E7191" : '#fff',
                    fontWeight: 500
                },
                formatter: function (value) {
                    return value + '%';
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }

    const UsedGraphSeries = [20, 80]

    const UsedGraphOptions: any = {
        chart: {
            height: 300,
            type: 'radialBar',
            fontFamily: "Montserrat,Public Sans,sans-serif",
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '65%',
                },
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '32px',
                        fontWeight: 700,
                        color: theme.palette.mode === 'light' ? "#6E7191" : '#fff'
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: theme.palette.mode === 'light' ? "#6E7191" : '#fff',
                        formatter: function (w: any) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 100 + "%"
                        }
                    }
                }
            }
        },
        stroke: {
            lineCap: "round",
        },
        labels: ['Left', 'Used'],
        colors: ['#0E918C', '#FF4B55'],
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            fontSize: "14px",
            fontWeight: 500,
            labels: {
                colors: theme.palette.mode === 'light' ? "#6E7191" : '#fff',
            },

            itemMargin: {
                horizontal: 10,
            },
        }
    }
    return (
        <>
            <Card sx={styles.cardWrapper(theme.palette.mode)}>
                <Box display="flex" justifyContent="space-between" ml={4}>
                    <Typography fontSize={16} fontWeight={700} color={theme.palette.mode}>Memory Usage</Typography>
                    <Typography fontSize={14} fontWeight={600} color={theme.palette.mode}>0 GB</Typography>
                </Box>
                <Box>
                    <ReactApexChart options={MemoryUsageOptions} series={MemoryUsageSeries} type="line" height={280} />
                </Box>
            </Card>
            <Card sx={styles.cardContent(theme.palette.mode)}>
                <Box display="flex" justifyContent="space-between" ml={4}>
                    <Typography fontSize={16} fontWeight={700} color={theme.palette.mode}>Used%</Typography>
                </Box>
                <Grid container mt={2} alignItems="center">
                    <Grid item xs={6}>
                        <Box sx={{ float: "left" }}>
                            <ReactApexChart options={UsedGraphOptions} series={UsedGraphSeries} type="radialBar" height={300} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        {dataUsageHeading.map((item, i) => (
                            <Box sx={styles.memoryStats(theme.palette.mode)} key={i}><Typography fontSize="14px">{item.title}</Typography><Typography fontSize="14px">{item.memory}</Typography></Box>
                        ))}
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default MemoryUtilisation;

const styles = {
    cardWrapper: (theme: any) => ({ p: 2, mb: "15px", background: theme === 'light' ? "white !important" : '#212B36 !important', boxShadow: "box-shadow: 0px 0px 7px 0px rgba(14, 145, 140, 0.20);" }),
    cardContent: (theme: any) => ({ p: 2, background: theme === 'light' ? "white !important" : '#212B36 !important', boxShadow: "box-shadow: 0px 0px 7px 0px rgba(14, 145, 140, 0.20);" }),
    memoryStats: (theme: any) => ({ background: theme === 'light' ? '#f5f5f5' : 'rgba(22, 28, 36, 0.3)', display: "flex", justifyContent: "space-between", mb: "20px", px: "13px !important", py: "7px !important", boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.20) inset", borderRadius: "4px" }),
    heading: () => ({})
}