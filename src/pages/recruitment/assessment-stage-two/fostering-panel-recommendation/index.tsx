import Page from "@root/components/Page";

import Layout from "@root/layouts";

import React from "react";
import Error from "@root/components/Error";
import PanelSection from "@root/sections/recruitment/assessment-stage-two/fostering-panel/PanelSection";
import CalendarEvents from "@root/sections/recruitment/assessment-stage-two/fostering-panel/CalendarEvents";
import PanelNotifications from "@root/sections/recruitment/assessment-stage-two/fostering-panel/PanelNotifications";
import PieChart from "@root/sections/recruitment/assessment-stage-two/fostering-panel/charts/PieChart";
import BarChart from "@root/sections/recruitment/assessment-stage-two/fostering-panel/charts/BarChart";
import HorizaontalTabs from "@root/components/HorizaontalTabs";

// ----------------------------------------------------------------------

import HomeIcon from "@mui/icons-material/Home";

import { Box, Card, Grid } from "@mui/material";

import { useTheme } from "@emotion/react";

import IsFetching from "@root/components/loaders/IsFetching";
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Assessment stage 2",
    href: "/recruitment",
  },
  {
    name: "Fostering Panel Recommendation",
    href: "",
  },
];

const PAGE_TITLE = "Fostering Panel Recommendation";

FosteringPanelRecommendationStage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function FosteringPanelRecommendationStage() {
  const theme: any = useTheme();

  let role = "foster-carer";

  // if (isError) {
  //   return <Error />;
  // }

  return (
    <Page title={PAGE_TITLE}>
      <PanelSection />
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <CalendarEvents />
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <PanelNotifications />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <HorizaontalTabs tabsDataArray={["Pie Chart", "Bar Chart"]}>
                    <PieChart />

                    <BarChart />
                  </HorizaontalTabs>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}
