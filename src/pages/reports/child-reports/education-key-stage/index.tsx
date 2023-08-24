import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import EducationKeyStage from "@root/sections/reports/child-reports/education-key-stage/EducationKeyStage";

const PAGE_TITLE = "Education Key Stage Report";

EducationKeyStateLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
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
// ----------------------------------------------------------------------

export default function EducationKeyStateLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <EducationKeyStage />
    </Page>
  );
}
