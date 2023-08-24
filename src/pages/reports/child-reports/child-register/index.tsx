import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildRegister from "@root/sections/reports/child-reports/child-register/ChildRegister";

const PAGE_TITLE = "Child Register Report Fostered Child's Comments";

ChildRegisterLayout.getLayout = function getLayout(page: any) {
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

export default function ChildRegisterLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildRegister />
    </Page>
  );
}
