import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Layout from '@root/layouts';
import Page from '@root/components/Page';
import SocialWorker from '@root/sections/referral/social-worker-request/SocialWorker';

const PAGE_TITLE = "SW List";

SocialRequestForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Referral list",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SocialRequestForm() {
  return (
    <Page title={PAGE_TITLE}>
      <SocialWorker />
    </Page>
  );
}
