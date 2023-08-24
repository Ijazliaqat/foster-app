import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box, Card } from '@mui/material';
import AgencySafeguardingPolicyList from '@root/sections/safeguarding/policy-guide-templates/agency-policy/AgencySafeguardingPolicyList';

const PAGE_TITLE = "Agency Safeguarding Policy List";

AgencyPolicy.getLayout = function getLayout(page: any) {
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

export default function AgencyPolicy() {
  return (
    <Page title={PAGE_TITLE}>
      <Card>
        <AgencySafeguardingPolicyList />
      </Card>
    </Page>
  );
}