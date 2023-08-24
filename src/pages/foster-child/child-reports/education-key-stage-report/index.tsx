import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import EducationKeyStageReportList from "@root/sections/foster-child/child-reports/education-key-stage-reports/education-key-stage-reports-list/EducationKeyStageReportList";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "",
  },
  {
    name: "Education Info List",
    href: "",
  },
];

const PAGE_TITLE = "EDUCATION KEY STAGE REPORTS";

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
     <EducationKeyStageReportList />
    </Page>
  );
}
