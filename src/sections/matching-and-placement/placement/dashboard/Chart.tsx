import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";
import { chartTitles } from ".";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Chart() {
  let series: number[] = [44, 55, 41, 17, 15];
  let options: ApexOptions = {
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: "12px",
        fontFamily: "Montserrat,Public Sans,sans-serif",
      },
      dropShadow: {
        enabled: false,
      },
    },
    chart: {
      type: "donut",
    },
    stroke: {
      width: 1,
    },
    // dataLabels: { enabled: false },
    labels: [
      "Local Authority 1",
      "Local Authority 2",
      "Local Authority 3",
      "Local Authority 4",
      "Local Authority 5",
    ],
    colors: ["#E07601", "#78BFAA", "#4A797E", "#FFB600", "#5BA316"],
    legend: {
      show: false,
    },
  };

  return (
    <Grid sx={{ px: { lg: 0, sm: 2, xs: 1 }, py: 3.8 }} container spacing={4}>
      <Grid item lg={5} md={6} xs={12}>
        <Box sx={{height:{lg:"330px", xs:'250px'}}}>
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            height='100%'
          />
        </Box>
      </Grid>
      <Grid item lg={7} md={6} xs={12} sx={{ mt: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "10px",
          }}
        >
          <Grid container spacing={3}>
            {chartTitles?.map((item, index) => (
              <Grid key={index} item lg={6}>
                <Box sx={{ mt: 0.5 }}>
                  <Typography fontSize="16px" fontWeight={500}>
                    {item?.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "32px",
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
