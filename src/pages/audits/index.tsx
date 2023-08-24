import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Dashboard from "@root/sections/audits/dashboard/Dashboard";

const PAGE_TILE = "Auditor Dashboard";

Audits.getLayout = function getLayout(page: any) {
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
          name: "All",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Audits() {
  return (
    <Page title={PAGE_TILE}>
      <Dashboard />
    </Page>
  );
}
