import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SwotCompetitor from "@root/sections/marketing/swot-competitor/SwotCompetitor";

const PAGE_TITLE = "SWOT";

MerketingSwotAnalysisLayout.getLayout = function getLayout(page: any) {
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
          name: "Merketing",
          href: "/marketing",
        },
        {
          name: "Marketing Gap Analysis",
          href: "/marketing/swot-analysis",
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
  const title: string = "Busy Bee Fostering (South-East London)";
  return (
    <Page title={PAGE_TITLE}>
      <SwotCompetitor routerPath={"/marketing/market-gap-analysis"} title={title} />
    </Page>
  );
}
