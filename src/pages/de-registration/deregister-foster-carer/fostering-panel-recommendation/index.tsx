import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FosteringPanelRecommendation from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/fostering-panel-recommendation/FosteringPanelRecommendation";

// ==========================================================

const PAGE_TILE = "De-Registration";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "De-reg Assessments Stage 2",
          href: "/de-registration/deregister-foster-carer",
        },
        {
          name: "Fostering Panel",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <FosteringPanelRecommendation />
    </Page>
  );
}
