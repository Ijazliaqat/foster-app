import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import MeetingRecordForm from "@root/sections/matching-and-placement/placement/placement-meeting-record/form/MeetingRecordForm";

const PAGE_TILE = "Placement Meeting Record";

PlacementModule.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Placement Meeting Record List",
          href: "/placement/meeting-record",
        },
        {
          name: "Placement Meeting Record",
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
      <MeetingRecordForm />
    </Page>
  );
}
