import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function BarChart() {
  let barseries: any = [
    {
      data: [21, 22, 10],
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

    colors: ["#F6460F", "#2CB764", "#F6830F"],

    plotOptions: {
      bar: {
        columnWidth: "80%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Rejected", "Approved", "Pending"],

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
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box>
          <ReactApexChart
            options={baroptions}
            series={barseries}
            type="bar"
            width={250}
            height={164}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "25px",
            marginTop: "10%",
          }}
        >
          <Box>
            <Typography variant="subtitle2" display="block" gutterBottom>
              Pending
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "17px",
                  height: "16px",
                  background: "#F6830F",
                  borderRadius: "4px",
                  marginRight: "8px",
                }}
              ></Box>
              <Typography
                sx={{ marginTop: "-2px" }}
                variant="subtitle2"
                gutterBottom
              >
                40%
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" display="block" gutterBottom>
              Rejected
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "17px",
                  height: "16px",
                  background: "#F6460F",
                  borderRadius: "4px",
                  marginRight: "8px",
                }}
              ></Box>
              <Typography
                sx={{ marginTop: "-2px" }}
                variant="subtitle2"
                gutterBottom
              >
                40%
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" display="block" gutterBottom>
              Approved
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "17px",
                  height: "16px",
                  background: "#2CB764",
                  borderRadius: "4px",
                  marginRight: "8px",
                }}
              ></Box>
              <Typography
                sx={{ marginTop: "-2px" }}
                variant="subtitle2"
                gutterBottom
              >
                40%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
