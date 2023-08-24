import { ChildPersonalGoalsMain } from "@root/sections/foster-child/child-goals-pathway/child-personal-goals/ChildPersonalGoals";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";

export default function ChildPersonalGoals() {
  const PAGE_TITLE = "Child Personal Goals";

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: "/foster-child",
    },
    {
      name: "Personal Goal List",
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
        <ChildPersonalGoalsMain />
      </Page>
    </Layout>
  );
}
