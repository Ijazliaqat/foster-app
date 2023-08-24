import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import RecordCriticalIncidents from "@root/sections/reports/carer-report/foster-carer-record-critical-incidents-reports/RecordCriticalIncidents";

const PAGE_TITLE = "Carer Incidents Reports";

RecordCriticalIncidentsLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function RecordCriticalIncidentsLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <RecordCriticalIncidents />
    </Page>
  );
}
