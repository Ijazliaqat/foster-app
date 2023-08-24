import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import TransferPlacementTable from "@root/sections/matching-and-placement/placement/transfer-placement/transferPlacementTable";

const PAGE_TILE = "Transfer Placement";

TransferPlacement.getLayout = function getLayout(page: any) {
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
          name: "Transfer Placement List",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TransferPlacement() {
  return (
    <Page title={PAGE_TILE}>
      <TransferPlacementTable />
    </Page>
  );
}
