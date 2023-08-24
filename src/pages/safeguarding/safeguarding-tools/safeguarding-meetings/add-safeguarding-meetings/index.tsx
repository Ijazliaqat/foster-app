import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AddSafeguardingMeetingForm from '@root/sections/safeguarding/safeguarding-tools/safeguarding-meetings/add-safeguard-meeting-form/AddSafeguardingMeetingForm';

const PAGE_TITLE = "Add Safeguarding Meetings";

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
          name: "Safeguarding Meetings List",
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
    <AddSafeguardingMeetingForm/>
    </Page>
  );
}