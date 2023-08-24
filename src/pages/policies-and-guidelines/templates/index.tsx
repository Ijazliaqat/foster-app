import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import TemplatePolicies from '@root/sections/policies-and-guidelines/template-policies/TemplatePolicies';

const PAGE_TITLE = "Templates";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Policies and Guidelines",
          href: "/policies-and-guidelines",
        },
        {
          name: "All",
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
     <TemplatePolicies />
    </Page>
  );
}