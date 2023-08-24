import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box, Card } from '@mui/material';
import AgencySafeguardingPolicyList from '@root/sections/safeguarding/policy-guide-templates/agency-policy/AgencySafeguardingPolicyList';
import CCETemplateList from '@root/sections/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/SafeguardingTemplateList';
import SafeguardingTemplatesList from '@root/sections/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/SafeguardingTemplateList';

const PAGE_TITLE = "Templates List";

AgencyPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "/ Safeguarding Templates",
          href: "/safeguarding/policy-guide-templates/safeguarding-template",
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
        <SafeguardingTemplatesList />
      </Card>
    </Page>
  );
}