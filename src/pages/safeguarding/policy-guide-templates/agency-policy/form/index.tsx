import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box, Card } from '@mui/material';
import AgencySafeguardingPolicyForm from '@root/sections/safeguarding/policy-guide-templates/agency-policy/AgencySafeguardingPolicyForm';

const PAGE_TITLE = "Add Agency Safeguarding Policy";

AddSafeguardingPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Agency Safeguarding Policy List",
          href: "/safeguarding/policy-guide-templates/agency-policy",
        },
        {
          name: "Safeguarding Panel",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AddSafeguardingPolicy() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <AgencySafeguardingPolicyForm />
      </Card>
    </Page>
  );
}