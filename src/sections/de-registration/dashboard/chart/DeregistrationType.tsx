import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";
import { pieChartTitles } from ".";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const DeregistrationType = () => {
  let series: number[] = [20, 40, 40];
  let options: ApexOptions = {
    chart: {
      type: "pie",
    },
    stroke: {
      width: 1,
    },
    dataLabels: { enabled: false },
    labels: [
      "Uncontested Resignation",
      "Termination with Allegation",
      "Termination with Allegation",
    ],
    colors: ["#E07601", "#849399", "#5BA316"],
    legend: {
      show: false,
    },
  };

  return (
    <Grid sx={{ px: { lg: 0, sm: 2, xs: 1 } }} container spacing={2}>
      <Grid item lg={6} md={6} xs={12}>
        <Box>
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            height={300}
          />
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "10px",
          }}
        >
          <Grid container spacing={2} sx={{ flexDirection: "column" }}>
            <Typography
              variant="h5"
              sx={{ whiteSpace: "nowrap", color: "#0E918C", pl: 3, mt: "26px" }}
            >
              Year 2015
            </Typography>
            {pieChartTitles?.map((item, index) => (
              <Grid key={index} item lg={6} sx={{ flexDirection: "column" }}>
                <Box key={item?.color} sx={{ mt: 0.5 }}>
                  <Typography sx={{ whiteSpace: "nowrap", mb: "26px" }}>
                    {item?.title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: "31px",
                        height: "28px",
                        background: item?.color,
                        borderRadius: "4px",
                      }}
                    ></Box>
                    <Typography
                      variant="subtitle2"
                      ml={"12px"}
                    >{`${item?.percentage}%`}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
