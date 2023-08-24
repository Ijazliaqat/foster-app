import React from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import AssessmentHistory from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/termination-assessment-history/AssessmentHistory";

const PAGE_TITLE = "De-Registration";

ProposalToTerminate.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "De-reg Assessment Stage 2",
          href: "/de-registration/deregister-foster-carer/",
        },
        {
          name: "Termination Assessment History",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ProposalToTerminate() {
  return (
    <Page title={PAGE_TITLE}>
      <Box>
        <AssessmentHistory />
      </Box>
    </Page>
  );
}
