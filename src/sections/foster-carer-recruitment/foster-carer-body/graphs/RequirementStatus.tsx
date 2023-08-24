import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RequirementStatus() {
  const series = [12, 3, 40, 30, 5, 10];
  const options = {
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    labels: [
      "Stage 1",
      "Rejected",
      "Placed",
      "Stage 2",
      "Contracts & Declarations",
      "Enquiry Stage",
    ],
    colors: ["#E07601", "#C84C0F", "#5BA316", "#4A797E", "#849399", "#FFB600"],
    legend: {
      show: false,
    },
  };

  let legendsArray: any = [];
  for (let i = 0; i < series.length; i++) {
    legendsArray.push({
      series: series[i],
      label: options.labels[i],
      color: options.colors[i],
    });
  }

  return (
    <Grid container height={{ xs: "unset", md: "340px" }}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={320}
        />
      </Grid>
      <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
        <Grid container alignItems={"center"}>
          {legendsArray.map((item: any, index: any) => (
            <Grid item xs={6} key={index}>
              <Typography variant={"body2"}>{item?.label}</Typography>
              <Box display={"flex"} gap={"10px"}>
                <Box
                  bgcolor={item?.color}
                  borderRadius={1}
                  height={"20px"}
                  width={"20px"}
                />
                <Typography variant={"body2"} fontWeight={600}>
                  {item?.series}%
                </Typography>
              </Box>
              <Box />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
