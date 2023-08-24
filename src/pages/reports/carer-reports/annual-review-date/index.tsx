import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AnnualReviewDate from "@root/sections/reports/carer-report/annual-review-date-reports/AnnualReviewDate";

const PAGE_TITLE = "Annual Review Date Reports";

AnnualReviewDateLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
        },
       
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function AnnualReviewDateLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <AnnualReviewDate/>
    </Page>
  );
}
