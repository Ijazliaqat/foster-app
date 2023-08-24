import React from "react";
import { Grid } from "@mui/material";
import CarerCharts from "./carer-advocacy-charts/CarerCharts";
import UpcomingMeetings from "./upcoming-meetings/UpcomingMeetings";
import FosterCarerTable from "./foster-carer-table/FosterCarerTable";

// ============================================================================================

const CarerAdvocacy = () => {
  return (
    <>
      <FosterCarerTable />
      <Grid container spacing={2} sx={{ mt: "initial" }}>
        <Grid item lg={6} xs={12}>
          <CarerCharts />
        </Grid>
        <Grid item lg={6} xs={12}>
          <UpcomingMeetings />
        </Grid>
      </Grid>
    </>
  );
};

export default CarerAdvocacy;