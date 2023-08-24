import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import SafeguardingChildAdvocacyTable from "../../../../sections/safeguarding/child-protection/safeguarding-child-advocacy/SafeguardingChildAdvocacyTable";

const PAGE_TITLE = "Safeguarding - Child Advocacy List";

SafeguardingChildAdvocacy.getLayout = function getLayout(page: any) {
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
          name: "Safeguarding",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingChildAdvocacy() {
  return (
    <Page title={PAGE_TITLE}>
        <SafeguardingChildAdvocacyTable />
    </Page>
  );
}