import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SocialWorkerReport from "@root/sections/reports/ifa-reports/FR-E/social-worker-report/SocialWorkerReport";

const PAGE_TITLE = "Reports";

FRE.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-E-childs-social-worker",
        },
        {
          name: "FR-E Child's Social Worker Report"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRE() {
  return (
    <Page title={PAGE_TITLE}>
      <SocialWorkerReport />
    </Page>
  );
}
