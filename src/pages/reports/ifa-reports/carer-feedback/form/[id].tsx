import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import ViewCarerFeedBackForm from "@root/sections/reports/ifa-reports/carer-feedback/view-carer-feedback/ViewCarerFeedBack";

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
          href: "/reports/ifa-reports/carer-feedback",
        },
        {
          name: "Carer Feedback For Employees Apraisal",
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
      <ViewCarerFeedBackForm action={action} id={id} />
    </Page>
  );
}
