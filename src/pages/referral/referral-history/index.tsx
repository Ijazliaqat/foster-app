import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ReferralHistoryList from '@root/sections/referral/referral-history/ReferralHistory';

const PAGE_TITLE = "Referral History";

SafeguardingTemplate.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referrals",
          href: "/referral",
        },
        {
          name: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingTemplate() {
  return (
    <Page title={PAGE_TITLE}>
     <ReferralHistoryList/>
    </Page>
  );
}