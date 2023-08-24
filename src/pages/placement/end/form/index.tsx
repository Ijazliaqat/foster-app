import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import EndPlacementForm from "@root/sections/matching-and-placement/placement/end-placement/end-placement-form/EndPlacementForm";

// =================================================================================

const PAGE_TILE = "End Placement";

PlacementModule.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "End Placement List",
          href: "/placement/end",
        },
        {
          name: "End Placement",
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
      <EndPlacementForm />
    </Page>
  );
}
