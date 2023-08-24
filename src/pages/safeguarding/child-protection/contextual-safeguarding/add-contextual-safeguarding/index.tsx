import React from 'react'
import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import { Box, Card } from '@mui/material';
import ContextualSafeguardingForm from '@root/sections/safeguarding/child-protection/contextual-safeguarding/contextual-safeguarding-form/ContextualSafeguardingForm'
import Page from '@root/components/Page';

const PAGE_TITLE = "Add Contextual Safeguarding";

AddContextualSafeguarding.getLayout = function getLayout(page: any) {
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
          name: "Contextual Safeguarding List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AddContextualSafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <ContextualSafeguardingForm />
      </Card>
    </Page>
  );
}