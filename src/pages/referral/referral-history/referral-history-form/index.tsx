import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ReferralHistoryForm from '@root/sections/referral/referral-history/referrel-history-forms/ReferralHistoryForms';

const PAGE_TITLE = "Referral History Form";

SafeguardingTemplate.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral history",
          href: "/referral/referral-history",
        },
        {
          name: "Referral",
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
     <ReferralHistoryForm/>
    </Page>
  );
}