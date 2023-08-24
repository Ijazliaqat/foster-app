import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import SafeguardingCheckList from '@root/sections/safeguarding/safeguarding-tools/safeguarding-checklist';

const PAGE_TITLE = "Safeguarding Checklist";

SafeguardingChecklist.getLayout = function getLayout(page: any) {
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
          name: "All",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingChecklist() {
  return (
    <Page title={PAGE_TITLE}>
     <SafeguardingCheckList/>
    </Page>
  );
}
