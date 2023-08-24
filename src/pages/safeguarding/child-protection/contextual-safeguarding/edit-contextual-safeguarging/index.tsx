import React from 'react'
import { Box, Card } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import  ContextualSafeguardingForm  from '@root/sections/safeguarding/child-protection/contextual-safeguarding/contextual-safeguarding-form/ContextualSafeguardingForm';
import Layout from '@root/layouts';


const PAGE_TITLE = "Edit Contextual Safeguarding";

EditContextualSafeguarding.getLayout = function getLayout(page: any) {
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

export default function EditContextualSafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <ContextualSafeguardingForm />
      </Card>
    </Page >
  );
}