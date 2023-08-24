import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SupervisoryHomeVisit from "@root/sections/reports/child-reports/supervisory-home-visit/SupervisoryHomeVisit";

const PAGE_TITLE = "Supervisory Home Visit";

SupervisoryHomeVistLayout.getLayout = function getLayout(page: any) {
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

export default function SupervisoryHomeVistLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <SupervisoryHomeVisit />
    </Page>
  );
}
