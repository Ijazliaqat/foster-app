import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import Dashboard from "@root/sections/training/dashboard/Dashboard";

const PAGE_TILE = "Dashboard";

Training.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Training",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Training() {
  return (
    <Page title={PAGE_TILE}>
      <Dashboard />
    </Page>
  );
}
