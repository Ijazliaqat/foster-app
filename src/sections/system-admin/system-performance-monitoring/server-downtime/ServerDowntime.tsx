import { Box, Card, Typography, useTheme } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React from "react";
import { ResultLog } from "./result-log/ResultLog";
import { UptimeChanges } from "./uptime-changes/UptimeChanges";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ServerDowntime = () => {
  const theme = useTheme();

  const MemoryUsageSeries = [
    {
      name: "Uptime",
      data: [30, 60, 70, 20, 10, 32, 56, 70, 80, 10, 40, 75],
    },
    {
      name: "DownTime",
      data: [20, 40, 60, 80, 90, 95, 100, 20, 40, 60, 80, 90],
    },
    {
      name: "Response Time",
      data: [5, 20, 30, 40, 50, 62, 70, 20, 40, 60, 80, 90],
    },
  ];
  const MemoryUsageOptions: ApexOptions = {
    chart: {
      height: 280,
      type: "line",
      fontFamily: "Montserrat,Public Sans,sans-serif",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "light" ? "light" : "dark",
    },
    colors: ["#0E918C", "#F7B923", "#F6830F"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width:2
    },
    grid: {
      borderColor: "#f5f5f5",
      row: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 1,
      },
    },
    markers: {
      size: 5,
    },
    xaxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#6E7191" : "#fff",
          fontWeight: 500,
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "",
      },
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#6E7191" : "#fff",
          fontWeight: 500,
        },
        formatter: function (value) {
          return value + " sec";
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  return (
    <>
      <Card sx={styles.cardStyle}>
        <Box display="flex" justifyContent="space-between" ml={4}>
          <Typography fontSize={16} fontWeight={700} color={theme.palette.mode}>
            Server Downtime
          </Typography>
        </Box>
        <ReactApexChart
          options={MemoryUsageOptions}
          series={MemoryUsageSeries}
          type="line"
          height={280}
        />
      </Card>
      <Card sx={styles.cardStyle}>
        <HorizaontalTabs tabsDataArray={["Uptime Changes", "Result Log"]}>
          <UptimeChanges />
          <ResultLog />
        </HorizaontalTabs>
      </Card>
    </>
  );
};

export default ServerDowntime;

const styles = {
  cardStyle: (theme: any) => ({
    p: 2,
    mt: "15px",
    background:
      theme.palette.mode === "light"
        ? "white !important"
        : "#212B36 !important",
  }),
};
