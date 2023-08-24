import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ClaDocumentation from "@root/sections/reports/child-reports/CLA-documentation/ClaDocumentation";

const PAGE_TITLE = "CLA Documentation Report";

CLADocumentLayout.getLayout = function getLayout(page: any) {
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

export default function CLADocumentLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ClaDocumentation />
    </Page>
  );
}
