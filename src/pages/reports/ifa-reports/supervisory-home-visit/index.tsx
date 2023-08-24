import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { SupervisoryHomeVisit } from "@root/sections/reports/ifa-reports/supervisory-home-visit/SupervisoryHomeVisit";

const PAGE_TITLE = "Reports";

SupervisoryHomeVisitLayout.getLayout = function getLayout(page: any) {
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
          name: "IFA Reports",
          href: "/reports",
        },
        {
          name: "Supervisory Home Visit",
        },

      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function SupervisoryHomeVisitLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <SupervisoryHomeVisit />
    </Page>
  );
}
