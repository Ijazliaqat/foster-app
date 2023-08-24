import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import React from "react";
import StageOneApprovalForm from "@root/sections/recruitment/assessment-stage-one/stage-one-approval-form/StageOneApprovalForm";

const PAGE_TITLE = "Recruitment";

StageOneApproval.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Assessment stage 1",
          href: "/recruitment",
        },
        {
          name: "Stage 1 Decision Form",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function StageOneApproval() {
  return (
    <Page title={PAGE_TITLE}>
      <StageOneApprovalForm />
    </Page>
  );
}
