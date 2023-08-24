import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import SafeguardingMeasuresToBeTaken from '@root/sections/safeguarding/safeguarding-tools/safeguarding-measures-to-be-taken/SafeguardingMeasuresTakenTable';

const PAGE_TITLE = "Safeguarding Measures List";

SafeguardingMeasures.getLayout = function getLayout(page: any) {
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
          name: "Safeguarding Measures",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingMeasures() {
  return (
    <Page title={PAGE_TITLE}>
    <SafeguardingMeasuresToBeTaken/>
    </Page>
  );
}