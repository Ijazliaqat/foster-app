import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FosteringServiceManagerReport from "@root/sections/reports/ifa-reports/FR-H/FosteringServiceManagerReport";

const PAGE_TITLE = "Reports";

FRH.getLayout = function getLayout(page: any) {
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
          name:"FR-H Fostering Service Manager Report"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRH() {
  return (
    <Page title={PAGE_TITLE}>
      <FosteringServiceManagerReport />
    </Page>
  );
}
