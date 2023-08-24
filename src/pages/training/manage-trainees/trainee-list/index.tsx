import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import TraineeLists from "@root/sections/training/manage-trainees/trainee-list/TraineeList";

const PAGE_TILE = "Trainee List";

TraineeList.getLayout = function getLayout(page: any) {
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
          name: "Training Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TraineeList() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <TraineeLists />
    </Page>
  );
}
