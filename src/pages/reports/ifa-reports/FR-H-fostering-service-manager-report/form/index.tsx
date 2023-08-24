import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddFosteringServiceManagerReport from "@root/sections/reports/ifa-reports/FR-H/add-fostering-service-manager-report/AddFosteringServiceManagerReport";

const PAGE_TITLE = "Reports";

FRD1.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-H",
        },
        {
          name:"FR-H Fostering Service Manager Report"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRD1() {
  return (
    <Page title={PAGE_TITLE}>
      <AddFosteringServiceManagerReport />
    </Page>
  );
}
