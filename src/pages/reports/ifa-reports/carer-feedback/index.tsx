import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CareerFeedback from "@root/sections/reports/ifa-reports/carer-feedback/CarerFeedback";

const PAGE_TITLE = "Reports";

CarerFeedbackLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Feedback for Employees Apraisal",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerFeedbackLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <CareerFeedback />
    </Page>
  );
}
