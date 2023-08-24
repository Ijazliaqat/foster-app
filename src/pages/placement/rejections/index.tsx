import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import Rejection from "@root/sections/matching-and-placement/placement/rejections/Rejection";

const PAGE_TILE = "Rejections";

PlacementModule.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/placement",
        },
        {
          name: "Child Discharge List",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function PlacementModule() {
  return (
    <Page title={PAGE_TILE}>
      <Rejection />
    </Page>
  );
}
