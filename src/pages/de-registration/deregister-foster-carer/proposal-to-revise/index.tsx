import React from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import RevisionAssessmentHistory from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/revision-assessment-history/RevisionAssessmentHistory";


const PAGE_TITLE = "De-Registration";

ProposalToRevise.getLayout = function getLayout(page: any) {
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
          name: "Revision Assessment History ",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ProposalToRevise() {
  return (
    <Page title={PAGE_TITLE}>
      <Box>
        <RevisionAssessmentHistory/>
      </Box>
    </Page>
  );
}