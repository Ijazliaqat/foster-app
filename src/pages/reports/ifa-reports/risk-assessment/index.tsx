import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import RiskAssessmentForm from "@root/sections/reports/ifa-reports/risk-assessment/RiskAssessmentForm";

const PAGE_TITLE = "Reports";

RiskAssessment.getLayout = function getLayout(page: any) {
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
          name: "Risk Assessment Form",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function RiskAssessment() {
  return (
    <Page title={PAGE_TITLE}>
      <RiskAssessmentForm />
    </Page>
  );
}
