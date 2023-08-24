import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Card } from '@mui/material';
import SafeguardingMeasuresChildTable from '@root/sections/safeguarding/safeguarding-tools/safeguarding-measures-child-placed/SafeguardingMeasuresChildTable';

const PAGE_TITLE = "Safeguarding Measures List";

SafeguardingMeasuresChildPlaced.getLayout = function getLayout(page: any) {
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
          name: "Safeguarding Measures ( During Child Placement )",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingMeasuresChildPlaced() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 1 }}>
        <SafeguardingMeasuresChildTable />
      </Card>
    </Page>
  );
}