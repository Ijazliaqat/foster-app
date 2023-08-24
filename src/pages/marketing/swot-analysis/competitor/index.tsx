import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SwotCompetitor from "@root/sections/marketing/swot-competitor/SwotCompetitor";

const PAGE_TITLE = "SWOT Analysis";

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
          name: "Market Gap Analysis",
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
  const title: string = "SWOT on - Marketing Strategy of Agency (Jan 2021 - Jun 2021)";
  return (
    <Page title={PAGE_TITLE}>
      <SwotCompetitor routerPath={"/marketing/swot-analysis"} title={title} />
    </Page>
  );
}
