import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildAllegationsForm from "@root/sections/reports/child-reports/child-allegations/child-allegations-form/ChildAllegationsForm";

const PAGE_TITLE = "Child Allegations Reports";

childAllegationFormLayout.getLayout = function getLayout(page: any) {
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

export default function childAllegationFormLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildAllegationsForm />
    </Page>
  );
}
