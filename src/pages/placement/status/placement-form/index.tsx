import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PlacementStatusForm from "@root/sections/matching-and-placement/placement/placement-status/placement-status-form/PlacementStatusForm";

const PAGE_TILE = "Placement Status";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Placement Status List",
          href: "/placement/status",
        },
        {
          name: "Placement Status",
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
      <PlacementStatusForm />
    </Page>
  );
}
