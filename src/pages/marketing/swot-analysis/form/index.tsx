import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SwotAnalysisForm from "@root/sections/marketing/swot-analysis/swot-analysis-form/SwotAnalysisForm";

const PAGE_TITLE = "Add SWOT Analysis Info";

MerketingSwotAnalysisLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Merketing",
          href: "/marketing",
        },
        {
          name: "SWOT Analysis",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MerketingSwotAnalysisLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <SwotAnalysisForm />
    </Page>
  );
}
