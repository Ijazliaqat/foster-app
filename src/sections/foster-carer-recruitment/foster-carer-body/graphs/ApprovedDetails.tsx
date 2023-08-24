import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ApprovedDetails() {
  const theme: any = useTheme();

  const series = [
    {
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 800, 700, 600],
    },
  ];

  const options = {
    chart: { toolbar: { show: false } },

    dataLabels: {
      enabled: false,
    },

    tooltip: { enabled: false },

    colors: theme.palette.primary.main,

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

    yaxis: {
      labels: {
        show: true,
        style: {
          colors: theme.palette.contrastText,
        },
      },
    },

    fill: {
      opacity: 1,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={325} />
  );
}
