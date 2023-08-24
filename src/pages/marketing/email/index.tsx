import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import EmailMarketing from "@root/sections/marketing/email-marketing/EmailMarketing";

const PAGE_TITLE = "Emails";

MarketingEmailLayout.getLayout = function getLayout(page: any) {
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
          name: "Email Marketing",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingEmailLayout() {
  return <Page title={PAGE_TITLE}>
    <EmailMarketing />
  </Page>;
}
