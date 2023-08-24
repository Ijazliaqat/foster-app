import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FRBSection from "@root/sections/reports/ifa-reports/FR-B/FRB";
const PAGE_TITLE = "Reports";

FRB.getLayout = function getLayout(page: any) {
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
          name: "FR-B Foster Carer Report"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRB() {
  return (
    <Page title={PAGE_TITLE}>
      <FRBSection />
    </Page>
  );
}
