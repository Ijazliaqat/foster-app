import React from "react";
import { chartTitles } from ".";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Grid, Typography } from "@mui/material";

// ===============================================================

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function PieChart() {
  let series: number[] = [40, 40, 20];
  let options: ApexOptions = {
    chart: {
      type: "pie",
    },
    stroke: {
      width: 1,
    },
    dataLabels: { enabled: false },
    labels: ["Pending", "Rejected", "Approved"],
    colors: ["#E07601", "#F6460F", "#2CB764"],
    legend: {
      show: false,
    },
  };

  return (
    <Grid sx={{ px: { lg: 0, sm: 2, xs: 1 } }} container spacing={2}>
      <Grid item lg={6} md={6} xs={12}>
        <Box>
          <ReactApexChart options={options} series={series} type="pie" height={240} />
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
              <Grid key={index} item lg={4} md={5} xs={4}>
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
                    <Typography variant="subtitle2" fontSize={10} fontWeight={500}>{`${item?.percentage}%`}</Typography>
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
