import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChecklistPolicies from '@root/sections/policies-and-guidelines/checklists-policies/ChecklistPolicies';

const PAGE_TITLE = "Checklists";

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
      <ChecklistPolicies />
    </Page>
  );
}