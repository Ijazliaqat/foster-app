import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import VericalTabs from "@root/components/VericalTabs";
import ScheduleContent from "@root/sections/marketing/social-media-marketing/schedule-content/ScheduleContent";
import Results from "@root/sections/marketing/social-media-marketing/results/Results";
import PitchesAndRequests from "@root/sections/marketing/social-media-marketing/pitches-and-requests/PitchesAndRequests";
import HorizaontalTabs from "@root/components/HorizaontalTabs";

const PAGE_TITLE = "Schedule Content";

MarketingSocialMediaLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Merketing",
          href: "/marketing",
        },
        {
          name: "Social Media Marketing",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingSocialMediaLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Shedule content", "Results", "Pitches and Requests"]}
      >
        <ScheduleContent />
        <Results />
        <PitchesAndRequests />
      </HorizaontalTabs>
    </Page>
  );
}
