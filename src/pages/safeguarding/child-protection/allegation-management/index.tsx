import AllegationManagementTable from '@root/sections/safeguarding/child-protection/allegation-management/AllegationManagementTable';
import { Card } from '@mui/material';
import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';

const PAGE_TITLE = "Allegation Management List";

AllegationManagement.getLayout = function getLayout(page: any) {
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

export default function AllegationManagement() {
  return (
    <Page title={PAGE_TITLE}>
      <AllegationManagementTable />
    </Page>
  );
}