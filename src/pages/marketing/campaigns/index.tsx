import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Campaigns from "@root/sections/marketing/campaigns-marketing/Campaigns";

const PAGE_TITLE = "Campaigns";

CampaignsLayout.getLayout = function getLayout(page: any) {
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
          name: "Marketing Campaigns",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CampaignsLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <Campaigns />
    </Page>
  );
}
