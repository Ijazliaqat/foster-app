import React from 'react'
import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import Matching from '@root/sections/matching-and-placement/matching/Matching';

const PAGE_TILE = "Matching";

MatchingAndPlacement.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/matching-and-placement/matching",
        },
        {
          name: "Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function MatchingAndPlacement() {
  return (
    <Page title={PAGE_TILE}>
      <Matching />
    </Page>
  );
}