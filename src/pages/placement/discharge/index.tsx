import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import DischargePlacement from "@root/sections/matching-and-placement/placement/discharge-placement/DischargePlacement";

// =======================================================================================================

const PAGE_TILE = "Child Discharge";

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
        <DischargePlacement />
    </Page>
  );
}
