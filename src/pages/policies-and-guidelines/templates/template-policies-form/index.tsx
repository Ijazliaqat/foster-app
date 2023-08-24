import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import TemplatePoliciesTabs from '@root/sections/policies-and-guidelines/template-policies/template-policies-tabs/TemplatePoliciesTabs';

const PAGE_TITLE = "Templates";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Letter Templates",
          href: "/policies-and-guidelines/templates",
        },
        {
          name: "Add",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function PolicyGuidelinesPage() {
  return (
    <Page title={PAGE_TITLE}>
     <TemplatePoliciesTabs />
    </Page>
  );
}