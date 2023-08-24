import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildrenGuidesSection from '@root/sections/children-guides/ChildrenGuides';

// ----------------------------------------------------------------------
// Constants
const PAGE_TITLE = "Children’s Guides";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/dashboard",
  },
];

// ----------------------------------------------------------------------

ChildrenGuides.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ChildrenGuides() {

  return (
    <Page title={PAGE_TITLE}>
      <ChildrenGuidesSection />
    </Page>
  );
}
