import React from "react";
import { chartTitles } from ".";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";

// =========================================================================

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function BarChart() {
  let barseries: any = [
    {
      data: [40, 40, 20],
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

    colors: ["#E07601", "#849399", "#4A797E"],

    plotOptions: {
      bar: {
        columnWidth: "75%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Pending", "Rejected", "Approved"],

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
      <Grid item lg={6} md={6} xs={12}>
        <Box>
          <ReactApexChart options={baroptions} series={barseries} type="bar" height={200} />
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "60px",
          }}
        >
          <Grid container spacing={2}>
            {chartTitles?.map((item, index) => (
              <Grid key={index} item md={4} xs={4}>
                <Box key={item?.color} sx={{ mt: 0.5 }}>
                  <Typography sx={{ fontSize: "0.6rem" }}>{item?.title}</Typography>
                  <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        background: item?.color,
                        borderRadius: "4px",
                      }}
                    ></Box>
                    <Typography fontSize={10} fontWeight={600} variant="subtitle2">{`${item?.percentage}%`}</Typography>
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
