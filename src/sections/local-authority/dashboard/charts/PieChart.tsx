import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";
import { pieChartTitles } from ".";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function PieChart() {
    let series: number[] = [12, 3, 40, 30, 5, 10];
    let options: ApexOptions = {
        chart: {
            type: "pie",
        },
        stroke: {
            width: 1,
        },
        dataLabels: { enabled: false },
        labels: ["Bexley Council", "Greenwich Council", "Newham Council", "Manchester Council", "Birmingham Council", "BlackPool Council"],
        colors: ["#E07601", "#849399", "#4A797E", "#5BA316", "#C84C0F", "#FFB600"],
        legend: {
            show: false,
        },
    };

    return (
        <Grid sx={{ px: { lg: 0, sm: 2, xs: 1 } }} container spacing={2}>
            <Grid item lg={12} md={6} xs={12}>
                <Box>
                    <ReactApexChart options={options} series={series} type="pie" height={300} />
                </Box>
            </Grid>
            <Grid item lg={12} md={6} xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        // flexDirection: "column",
                        gap: "4px",
                        marginTop: "10px",
                    }}
                >
                    <Grid container spacing={2} sx={{ marginLeft: "23px" }}>
                        {pieChartTitles?.map((item, index) => (
                            <Grid key={index} item lg={4}>
                                <Box key={item?.color} sx={{ mt: 0.5, mb: "37px" }}>
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
