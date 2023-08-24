import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import { SafeguardingAssessmentAddForm, SafeguardingAssessmentForm } from '@root/sections/safeguarding/safeguarding-tools/safeguarding-assessment-tool/safeguarding-assessment-add-form';
// import SafeguardingAssessmentAddForm from '@root/sections/safeguarding/safeguarding-tools/safeguarding-assessment-tool/safeguarding-assessment-add-form';

const PAGE_TITLE = "Edit Safeguarding Assessment";

SafeguardingAssessment.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safeguarding Assessment List ",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingAssessment() {
  return (
    //  <SafeguardingAssessmentAddForm/>
    <Page title={PAGE_TITLE}>
      <Box>
      <SafeguardingAssessmentForm />
      </Box>

    </Page>
  );
}