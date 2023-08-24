import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PlacementMeetingRecord from "@root/sections/matching-and-placement/placement/placement-meeting-record/PlacementMeetingRecord";

const PAGE_TILE = "Placement Meeting Record";

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
          name: "Placement Meeting Record List",
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
      <PlacementMeetingRecord />
    </Page>
  );
}
