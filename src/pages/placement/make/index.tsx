import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import MakePlacement from "@root/sections/matching-and-placement/placement/make-placement/MakePlacement";

const PAGE_TILE = "Make Placement";

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
          name: "Make Placement List",
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
      <MakePlacement />
    </Page>
  );
}
