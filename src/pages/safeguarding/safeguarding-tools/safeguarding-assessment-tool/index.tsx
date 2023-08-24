import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import SafeguardingAssessmentTool from '@root/sections/safeguarding/safeguarding-tools/safeguarding-assessment-tool/SafeguardingAssessmentTable';

const PAGE_TITLE = "Safeguarding Assessment List";

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
          name: "Safeguarding Assessments Tool",
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
    <Page title={PAGE_TITLE}>
      <SafeguardingAssessmentTool />
    </Page>
  );
}