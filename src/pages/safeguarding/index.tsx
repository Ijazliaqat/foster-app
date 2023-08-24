import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import SafeGuardCard from '@root/sections/safeguarding/safeguarding';

const PAGE_TILE = "Safeguarding Panel";

SafeGuarding.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "All",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function SafeGuarding() {
  return (
    <Page title={PAGE_TILE}>
      <SafeGuardCard />
    </Page>
  );
}