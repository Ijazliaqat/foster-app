import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";
import { barChartTitles } from ".";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});
export default function BarChart() {
    let barseries: any = [
        {
            data: [12, 3, 40, 30, 5, 10],
        },
    ];

    let baroptions: ApexOptions = {
        chart: {
            type: "bar",
            toolbar: { show: false },
            zoom: {
                enabled: false,
            },
            events: {
                click: function (chart, w, e) {
                    // e.preventDefault();
                    // console.log(chart, w, e)
                },
            },
        },

        colors: ["#E07601", "#849399", "#4A797E", "#5BA316", "#C84C0F", "#FFB600"],

        plotOptions: {
            bar: {
                columnWidth: "40%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: ["Bexley Council", "Greenwich Council", "Newham Council", "Manchester Council", "Birmingham Council", "BlackPool Council"],

        legend: {
            show: false,
            position: "right",
        },
        yaxis: {
            labels: {
                show: false,
            },
        },

        xaxis: {
            labels: {
                show: false,
            },
        },
    };

    return (
        <Grid sx={{ px: { lg: 0, sm: 2, xs: 1 } }} container spacing={2}>
            <Grid item lg={12} md={6} xs={12}>
                <Box>
                    <ReactApexChart options={baroptions} series={barseries} type="bar" height={295} />
                </Box>
            </Grid>
            <Grid item lg={12} md={6} xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        // flexDirection: "column",
                        gap: "4px",
                        marginTop: "20px",
                        marginRight: "50px",
                    }}
                >
                    <Grid container spacing={2} sx={{ marginLeft: "23px" }}>
                        {barChartTitles?.map((item, index) => (
                            <Grid key={index} item lg={4}>
                                <Box key={item?.color} sx={{ mt: 0.5, mb: 1.8 }}>
                                    <Typography>{item?.title}</Typography>
                                    <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                        <Box
                                            sx={{
                                                width: "31px",
                                                height: "28px",
                                                background: item?.color,
                                                borderRadius: "4px",
                                            }}
                                        ></Box>
                                        <Typography variant="subtitle2">{`${item?.percentage}%`}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}
