import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box, Card } from '@mui/material';
import AgencySafeguardingPolicyForm from '@root/sections/safeguarding/policy-guide-templates/agency-policy/AgencySafeguardingPolicyForm';
import CCETemplateForm from '@root/sections/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/SafeguardingTemplateForm';
import SafeguardingTemplateForm from '@root/sections/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/SafeguardingTemplateForm';

const PAGE_TITLE = "View Template";

AddSafeguardingPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Templates List",
          href: "/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details",
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
        <SafeguardingTemplateForm disabled={true}/>
      </Card>
    </Page>
  );
}