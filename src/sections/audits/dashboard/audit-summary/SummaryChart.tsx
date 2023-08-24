import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SummaryChart = () => {
  let barseries: any = [
    {
      name: "Net Profit",
      data: [9, 11, 4, 7, 10, 10, 9, 11, 5, 7, 12, 10],
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
      min: 0,
      max: 12,
      tickAmount: 6,
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
    <Box sx={styles.cardStyles}>
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="15px 15px 0">
        <Typography sx={{ color: "#0E918C", fontSize: "14px", fontWeight: "600" }}>
          Audit Summary
        </Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            sx={styles.selectStyle}
            value="2023"
            onChange={() => console.log("change")}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2021</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ReactApexChart options={baroptions} series={barseries} type="bar" height={270} />
    </Box>
  );
};

export default SummaryChart;

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
