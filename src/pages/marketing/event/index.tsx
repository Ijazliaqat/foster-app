import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import EventMarketing from "@root/sections/marketing/event-marketing/EventMarketing";

const PAGE_TITLE = "Events";

MarketingEventLayout.getLayout = function getLayout(page: any) {
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
          name: "Event Marketing",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingEventLayout() {
  return <Page title={PAGE_TITLE}>
    <EventMarketing />
  </Page>;
}
