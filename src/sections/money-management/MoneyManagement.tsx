import {
  Box,
  FormControl,
  Grid,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { managementCardData } from ".";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const MoneyManagement = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const year = new Date().getFullYear(); // Get the current year
  const daysInSelectedMonth = new Date(year, selectedMonth, 0).getDate();

  const theme: any = useTheme();

  const series = [
    {
      name: "January",
      data: [
        100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5,
        // ... and so on, values for each day of January
      ],
    },
    {
      name: "February",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130],
      // ... and so on, values for each day of February
    },
  ];

  const selectedData = series[selectedMonth - 1].data;
  const filteredSeries = [
    {
      name: "Net Profit",
      data: selectedData,
    },
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        barPadding: 0,
        endingShape: "rounded",
      },
    },
    chart: { toolbar: { show: false } },

    dataLabels: {
      enabled: false,
    },

    tooltip: { enabled: false },
    colors: theme.palette.primary.main,

    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
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
        formatter: function (value: any) {
          // Parse value as a float if it's not a number
          const numericValue = parseFloat(value);

          if (!isNaN(numericValue)) {
            return "£" + numericValue; // Adding '$' and formatting as currency
          }

          return value; // Return as-is if not a valid number
        },
      },
    },

    fill: {
      opacity: 1,
    },
  };

  return (
    <>
      <Grid container spacing={3}>
        {managementCardData?.map((card: any) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card?.id}>
              <Link href={`${card.path}`} style={{ textDecoration: "none" }}>
                <Box sx={(theme) => styles.marketingCard(theme, card.bgColor)}>
                  <Box sx={(theme) => styles.marketingCardContent(theme)}>
                    <Typography sx={(theme) => styles.cardText(theme)}>
                      {card.title}
                    </Typography>
                    <Image src={card.icon} width={52} height={52} alt="image" />
                  </Box>
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <FormControl sx={{ minWidth: 120, display: "block", mt: 5 }}>
        <Typography
          component="span"
          sx={{ color: "#0E918C", fontWeight: "600", mr: 2 }}
        >
          Saving this Month
        </Typography>
        <NativeSelect
          sx={{ fontWeight: "600" }}
          value={selectedMonth}
          onChange={(event: any) => setSelectedMonth(event?.target?.value)}
          inputProps={{
            name: "month",
            id: "month",
          }}
        >
          <option value={1}>January</option>
          <option value={2}>February</option>
          {/* <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>Auguest</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={10}>November</option>
          <option value={10}>December</option> */}
        </NativeSelect>
        <Paper sx={{ padding: 3 }}>
          {filteredSeries.map((monthData: any) => (
            <div key={monthData.month}>
              <ReactApexChart
                options={options}
                series={[
                  {
                    name: monthData?.name,
                    data: monthData.data,
                  },
                ]}
                type="bar"
                height={450}
              />
            </div>
          ))}
        </Paper>
      </FormControl>
    </>
  );
};

//style
const styles = {
  marketingCard: (theme: any, background: any) => ({
    background: background,
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.20)",
    borderRadius: "10px",
    padding: "15px",
    // width: "248px",
    height: "130px",
  }),
  marketingCardContent: (theme: any) => ({
    display: "flex",
    justifyContent: "space-between",
    Height: "100%",
  }),
  cardText: (theme: any) => ({
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      fontSize: "16px",
      fontWeight: "600",
      marginTop: "25px",
      alignItems: "center",
      width: "188px",
      color:
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.grey[800],
    },
  }),
};
