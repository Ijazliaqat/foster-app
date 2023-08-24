import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SupervisingSocialWorkerReport from "@root/sections/reports/ifa-reports/FR-A/supervising-social-worker-report/SupervisingSocialWorkerReport";

const PAGE_TITLE = "Reports";

FRASocialWorkerReport.getLayout = function getLayout(page: any) {
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
          href: '/reports'
        },
        {
          name: "IFA Reports",
          href: '/reports/ifa-reports/FR-A'
        },
        {
          name: "FR-A Supervising social worker report"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRASocialWorkerReport() {
  return (
    <Page title={PAGE_TITLE}>
      <SupervisingSocialWorkerReport />
    </Page>
  );
}
