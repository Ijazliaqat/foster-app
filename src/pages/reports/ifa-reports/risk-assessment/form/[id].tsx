import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import RiskAssessmentViewForm from "@root/sections/reports/ifa-reports/risk-assessment/view-risk-assessment-form/ViewRiskAssessmentForm";

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
          href: "/reports/ifa-reports/risk-assessment",
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
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <RiskAssessmentViewForm action={action} id={id}  />
    </Page>
  );
}
