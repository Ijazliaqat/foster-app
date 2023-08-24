import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ReviewingOfficerReport from "@root/sections/reports/ifa-reports/FR-G/ReviewingOfficerReport";

const PAGE_TITLE = "Reports";

FRG.getLayout = function getLayout(page: any) {
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
          name: "FR-G Reviewing Officer Report",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRG() {
  return (
    <Page title={PAGE_TITLE}>
      <ReviewingOfficerReport />
    </Page>
  );
}
