import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import SafeguardingMeeting from '@root/sections/safeguarding/safeguarding-tools/safeguarding-meetings/SafeGuardingMeetingTable';

const PAGE_TITLE = "Safeguarding Meetings List";

SafeguardingMeetings.getLayout = function getLayout(page: any) {
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
          name: "Safeguarding Meetings",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingMeetings() {
  return (
    <Page title={PAGE_TITLE}>
    <SafeguardingMeeting/>
    </Page>
  );
}