import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function EnquiryDetails() {
  const theme: any = useTheme();

  const series: any = [
    {
      data: [10, 41, 35, 51, 49, 62, 69, 91, 18, 70, 11, 12],
    },
    {
      data: [12, 10, 70],
    },
  ];

  const options: any = {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },

    stroke: {
      curve: "smooth",
    },

    tooltip: { enabled: false },

    legend: {
      show: false,
    },

    colors: ["#C82333", "#4B79A1"],

    grid: {
      row: {
        opacity: 0,
      },
    },

    yaxis: {
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
      },
    },

    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEV",
      ],
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
      },
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={325}
    />
  );
}
