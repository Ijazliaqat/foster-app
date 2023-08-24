import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import { AddTrainingSessionDetails } from "@root/sections/training/manage-trainers/training-sessions/add-training-session/add-training-session-details";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { AddTrainingSessionAttendees } from "@root/sections/training/manage-trainers/training-sessions/add-training-session/add-training-session-attendees";

const PAGE_TILE = "Add training Sessions";

TrainingSessions.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training/manage-trainers/training-sessions",
        },
        {
          name: "Manage Trainers",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TrainingSessions() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <Card sx={{ p: 2 }}>
        <HorizaontalTabs
            tabsDataArray={
                [
                    "Details",
                    "Attendees"
                ]
            }
        >

        <AddTrainingSessionDetails />
        <AddTrainingSessionAttendees />
        </HorizaontalTabs>
      </Card>
    </Page>
  );
}
