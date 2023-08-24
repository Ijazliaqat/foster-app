import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AgencyGuidelinesTabs from '@root/sections/policies-and-guidelines/agency-guidelines/agency-guidelines-tabs/AgencyGuidelinesTabs';

const PAGE_TITLE = "Policies And Guidelines";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/policies-and-guidelines/agency-guidelines",
        },
        {
          name: "Agency Guidelines",
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
     <AgencyGuidelinesTabs />
    </Page>
  );
}