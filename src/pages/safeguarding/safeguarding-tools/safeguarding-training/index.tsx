import React from "react";
import Layout from "@root/layouts";

import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import Dashboard from "@root/sections/safeguarding/safeguarding-tools/safeguarding-training/Dashboard";

const PAGE_TITLE = "Safeguarding Training";

SafeguadingTraining.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "FosterApp Training Hub",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguadingTraining() {
  return (
    <Page title={PAGE_TITLE}>
      <Dashboard />
    </Page>
  );
}
