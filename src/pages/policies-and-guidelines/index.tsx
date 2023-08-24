import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ReferralHistoryList from '@root/sections/referral/referral-history/ReferralHistory';
import Dashboard from '@root/sections/policies-and-guidelines/dashboard/Dashboard';

const PAGE_TITLE = "Policies and Guidelines";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/",
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
     <Dashboard/>
    </Page>
  );
}