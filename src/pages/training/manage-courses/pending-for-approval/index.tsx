import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import PendingForApproval from "@root/sections/training/manage-courses/pending-for-approval/PendingForApproval";


const PAGE_TILE = "Course List";

PendingApproval.getLayout = function getLayout(page: any) {
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
          name: "Course Sub Categories",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function PendingApproval() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <PendingForApproval />
    </Page>
  );
}