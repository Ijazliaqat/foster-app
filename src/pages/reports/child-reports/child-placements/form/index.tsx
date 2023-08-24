import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildPlacementsForm from "@root/sections/reports/child-reports/child-placements/child-placements-form/ChildPlacementsForm";

const PAGE_TITLE = "Child Placements Reports";

ChildPlacementFormLayout.getLayout = function getLayout(page: any) {
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

export default function ChildPlacementFormLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildPlacementsForm />
    </Page>
  );
}
