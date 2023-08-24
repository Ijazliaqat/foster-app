import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import SafeguardingTemplates from '@root/sections/safeguarding/policy-guide-templates/safeguarding-template/SafeguardingTemplates';

const PAGE_TITLE = "Safeguarding Templates";

SafeguardingTemplate.getLayout = function getLayout(page: any) {
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

export default function SafeguardingTemplate() {
  return (
    <Page title={PAGE_TITLE}>
     <SafeguardingTemplates/>
    </Page>
  );
}