import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ViewEducationKeyStage from "@root/sections/foster-child/child-reports/education-key-stage-reports/view-education-key-stage-reports/ViewEducationKeyStage";

const PAGE_TITLE = "VIEW EDUCATION KEY STAGE REPORTS";

////-----------------------------------------
EducationKeyStageReport.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "/recruitment",
        },
        {
          name: "Child Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EducationKeyStageReport() {
  return (
    <Page title={PAGE_TITLE}>
        <ViewEducationKeyStage/>
    </Page>
  );
}
