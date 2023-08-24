import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import MarketAnalysisTable from "@root/sections/marketing/marketing-gap-analysis/MarketAnalysisTable";

const PAGE_TILE = "Market Gap Analysis";
MarketAnalysis.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Marketing",
          href: "/marketing",
        },
        {
          name: "Marketings",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function MarketAnalysis() {
  return (
    <Page title={PAGE_TILE}>
      <MarketAnalysisTable />
    </Page>
  );
}
