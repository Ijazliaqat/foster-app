
import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FosteredYoungPersonForm from "@root/sections/reports/child-reports/fostered-young-person/fostered-young-person-form/FosteredYoungPersonForm";


const PAGE_TITLE = "Fostered Young Person's Comments";

FosteredYoungPersonLayout.getLayout = function getLayout(page: any) {
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

export default function FosteredYoungPersonLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <FosteredYoungPersonForm />
    </Page>
  );
}
