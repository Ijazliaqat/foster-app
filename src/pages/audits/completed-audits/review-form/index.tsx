import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ViewAnnualReviewForm from "@root/sections/audits/totall-audits/view-annual-review-form/ViewAnnualReviewForm";

// =======================================================================================================

const PAGE_TILE = "View Annual Review Form";

AuditorsList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Auditor Dashboard",
          href: "/audits",
        },
        {
          name: "Completed Audits",
          href: "/audits",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AuditorsList() {
  return (
    <Page title={PAGE_TILE}>
      <ViewAnnualReviewForm />
    </Page>
  );
}
