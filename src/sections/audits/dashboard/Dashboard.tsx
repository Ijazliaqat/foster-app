import { Box, Grid } from "@mui/material";
import React from "react";
import SummaryChart from "./audit-summary/SummaryChart";
import { cardsData } from ".";
import AuditCards from "./audit-status-cards/AuditCards";
import TodoAudits from "./audit-toDo/TodoAudits";

const Dashboard = () => {
  return (
    <Box>
      <Grid container>
        <Grid container spacing={2}>
          {cardsData.map((card) => (
            <Grid key={card?.id} item lg={4} md={6} xs={12}>
              <AuditCards data={card} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} mt="4px">
          <Grid item xl={7} xs={12}>
            <SummaryChart />
          </Grid>
          <Grid item xl={5} xs={12}>
            <TodoAudits />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
