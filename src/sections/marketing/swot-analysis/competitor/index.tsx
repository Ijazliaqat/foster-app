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
          name: "SWOT Analysis",
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
  return <Page title={PAGE_TITLE}>
    <SwotCompetitor routerPath={"/marketing/swot-analysis"} />
  </Page>;
}
