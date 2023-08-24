import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildIncidents from "@root/sections/reports/child-reports/child-incidents/ChildIncidents";

const PAGE_TITLE = "Child Incidents Report - Critical incident Report";

ChildIncidentsLayout.getLayout = function getLayout(page: any) {
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
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Child Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ChildIncidentsLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildIncidents />
    </Page>
  );
}
