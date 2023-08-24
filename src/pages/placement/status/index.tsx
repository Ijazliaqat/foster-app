import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PlacementStatusTable from "@root/sections/matching-and-placement/placement/placement-status/PlacementStatusTable";

const PAGE_TILE = "Placement Status";

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
          name: "Placement Status List",
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
      <PlacementStatusTable />
    </Page>
  );
}
