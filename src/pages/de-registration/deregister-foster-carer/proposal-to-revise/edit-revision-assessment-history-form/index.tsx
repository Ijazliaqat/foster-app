import React from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import RevisionAssessmentInfoForm from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/revision-assessment-history/revision-assessment-info-form/RevisionAssessmentInfoForm";
import RevisionInfo from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/revision-assessment-history/revision-info-form/RevisionInfoForm";

const PAGE_TITLE = "De-Registration";

RevisionAssessmentHistoryForm.getLayout = function getLayout(page: any) {
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
          name: "Revision Assessment Form",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function RevisionAssessmentHistoryForm() {
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Revision Assessment Info", "Revision Info"]}
      >
        <RevisionAssessmentInfoForm />
        <RevisionInfo />
      </HorizaontalTabs>
    </Page>
  );
}
