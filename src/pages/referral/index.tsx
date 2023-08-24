import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Dashboard from "@root/sections/referral/dashboard/Dashboard";

const PAGE_TILE = "Referral Dashboard";

Referral.getLayout = function getLayout(page: any) {
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
          name: "Referral",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Referral() {
  return (
    <Page title={PAGE_TILE}>
      <Dashboard />
    </Page>
  );
}
