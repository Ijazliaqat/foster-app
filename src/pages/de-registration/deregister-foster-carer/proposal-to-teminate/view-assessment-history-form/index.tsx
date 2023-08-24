import React, { useState } from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AssessmentInfoForm from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/termination-assessment-history/assessment-info-form/AssessmentInfoForm";
import TerminationInfoForm from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-fostering-panel/termination-assessment-history/termination-info-form/TerminationInfoForm";

const PAGE_TITLE = "De-Registration";

AssessmentHistoryForm.getLayout = function getLayout(page: any) {
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
          name: "Assessment Form",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AssessmentHistoryForm() {

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Assessment Info", "Termination Info"]}
      >
        <AssessmentInfoForm disabled/>
        <TerminationInfoForm disabled/>
      </HorizaontalTabs>
    </Page>
  );
}
