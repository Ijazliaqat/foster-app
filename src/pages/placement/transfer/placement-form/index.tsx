import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import TransferPlacementForm from "@root/sections/matching-and-placement/placement/transfer-placement/transfer-placement-form/TransferPlacementForm";

const PAGE_TILE = "Transfer Placement";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Transfer Placement",
          href: "/transfer-placement",
        },
        {
          name: "Transfer Placement",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AddPlacementForm() {
  return (
    <Page title={PAGE_TILE}>
      <TransferPlacementForm />
    </Page>
  );
}
