import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function PieChart() {
  let series: any = [10, 60, 30];

  let options: ApexOptions = {
    chart: {
      // type: "pie";
    },
    dataLabels: { enabled: false },
    labels: ["Rejected", "Approved", "Pending"],
    colors: ["#F6460F", "#2CB764", "#F6830F"],
    legend: {
      show: false,
    },
  };
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box>
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={300}
            height={200}
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
                {series[2]}%
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
                {series[0]}%
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
                {series[1]}%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
