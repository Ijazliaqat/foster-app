import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AgencyGuidelines from '@root/sections/policies-and-guidelines/agency-guidelines/AgencyGuidelines';

const PAGE_TITLE = "Policies And Guidelines";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/policies-and-guidelines",
        },
        {
          name: "Agency Guidlines",
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
     <AgencyGuidelines />
    </Page>
  );
}