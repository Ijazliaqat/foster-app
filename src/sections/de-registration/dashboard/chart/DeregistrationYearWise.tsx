// import React from 'react'

// const DeregistrationYearWise = () => {
//     return (
//         <div>DeregistrationYearWise</div>
//     )
// }

// export default DeregistrationYearWise



import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const DeregistrationYearWise = () => {
    let barseries: any = [
        {
            name: "Net Profit",
            data: [500, 700, 650, 650, 500, 750, 700, 800, 1000],
        },
    ];

    let baroptions: ApexOptions = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#0E918C"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "15px",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        legend: {
            show: false,
            position: "right",
        },
        xaxis: {
            categories: [
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
            ],
        },
        yaxis: {
            min: 200,
            max: 1000,
            tickAmount: 4,
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    };

    return (
        // <Box sx={styles.cardStyles}>
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="15px 15px 0">
            </Box>
            <ReactApexChart options={baroptions} series={barseries} type="bar" height={270} />
        </>

    );
};

export default DeregistrationYearWise;

const styles = {
    cardStyles: {
        padding: "0 8px",
        boxShadow: "0px 0px 7px rgba(14, 145, 140, 0.25)",
        borderRadius: "10px",
    },
    selectStyle: {
        borderRadius: "25px",
        "& .MuiSelect-select": {
            p: "5px 14px",
        },
    },
};