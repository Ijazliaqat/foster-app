import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import TrainingSessionMainModule from "@root/sections/training/manage-trainers/training-sessions";
import { useRouter } from "next/router";



const PAGE_TILE = "Training Sessions";

TrainingSessions.getLayout = function getLayout(page: any) {

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Training",
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

export default function TrainingSessions() {
  const theme = useTheme();
  const navigate = useRouter()
  const tabs = [
    {
      id: 1,
      title: 'Tab 1',
      content: <p>Content for Tab 1</p>,
    },
    {
      id: 2,
      title: 'Tab 2',
      content: <p>Content for Tab 2</p>,
    },
    {
      id: 3,
      title: 'Tab 3',
      content: <p>Content for Tab 3</p>,
    },
  ];
  const tabsdata = [
    "new",
    "old"
  ]
  return (
    <Page title={PAGE_TILE}>
      <TrainingSessionMainModule />
    </Page>
  );
}
