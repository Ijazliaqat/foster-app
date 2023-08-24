import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import AnnualReviewDataForm from "@root/sections/reports/carer-report/annual-review-date-reports/annual-review-data-form/AnnualReviewDataForm";

const PAGE_TITLE = "Annual Review Date Reports";

SecondOpinionLayout.getLayout = function getLayout(page: any) {
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
        name: "Annual Review Date Reports List",
      
      },
     
    ]}
    title={PAGE_TITLE}
  >
    {page}
  </Layout>
  );
};
// ----------------------------------------------------------------------

export default function SecondOpinionLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE} >
     <AnnualReviewDataForm action={action} id={id}/>
    </Page>
  );
}
