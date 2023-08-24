import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import TrainerRegistrationtTable from "@root/sections/training/manage-trainers/trainer-registration/TrainerRegistrationTable";

const PAGE_TILE = "Trainer Registration managment";

TrainerRegistration.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
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

export default function TrainerRegistration() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <Card sx={{ p: 2 }}>
        <TrainerRegistrationtTable />
      </Card>
    </Page>
  );
}
