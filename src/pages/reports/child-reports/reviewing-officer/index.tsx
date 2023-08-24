import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ReviewingOfficer from "@root/sections/reports/child-reports/reviewing-officer/ReviewingOfficer";

const PAGE_TITLE = "Reviewing Officer Report";

ReviewingOfficerLayout.getLayout = function getLayout(page: any) {
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

export default function ReviewingOfficerLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ReviewingOfficer />
    </Page>
  );
}
