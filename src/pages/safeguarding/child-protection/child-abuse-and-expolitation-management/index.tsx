import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChildAbuseExpolitationManagement from '@root/sections/safeguarding/child-protection/child-abuse-and-expolitation-management/ChildAbuseExpolitationManagement';

const PAGE_TITLE = "Child Abuse and Exploitation Management";

ChildAbuse.getLayout = function getLayout(page: any) {
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


export default function ChildAbuse() {

  return (
    <Page title={PAGE_TITLE}>
      <ChildAbuseExpolitationManagement />
    </Page>
  );
}