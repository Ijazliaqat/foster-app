import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { ChildPathwayPlanTable } from "@root/sections/foster-child/child-goals-pathway/child-pathway-plan/ChildPathwayPlanTable";

export default function ChildPathwayPlan() {
  const PAGE_TITLE = "Child Pathway Plan";

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: "/foster-child",
    },
    {
      name: "Pathway Plan List",
      href: "/",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      <Page title={PAGE_TITLE}>
        <ChildPathwayPlanTable />
      </Page>
    </Layout>
  );
}
