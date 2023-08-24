import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import RespitePlacementTable from "@root/sections/matching-and-placement/placement/respite-placement/respitePlacementTable";

const PAGE_TILE = "Child Respite";

PlacementStatus.getLayout = function getLayout(page: any) {
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
          name: "Child Respite List",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function PlacementStatus() {
  return (
    <Page title={PAGE_TILE}>
      <RespitePlacementTable />
    </Page>
  );
}
