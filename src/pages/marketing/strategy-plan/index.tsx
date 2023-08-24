import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import MarketingStrategyPlan from "@root/sections/marketing/marketing-strategy-plan/MarketingStrategyPlan";

const PAGE_TITLE = "Market Strategy";

MarketingStrategyLayout.getLayout = function getLayout(page: any) {
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
          name: "Market Strategy",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingStrategyLayout() {
  return <Page title={PAGE_TITLE}>
    <MarketingStrategyPlan/>
  </Page>;
}
