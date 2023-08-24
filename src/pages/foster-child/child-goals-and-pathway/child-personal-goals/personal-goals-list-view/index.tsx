import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { ChildPersonalGoalsListView } from "@root/sections/foster-child/child-goals-pathway/child-personal-goals/personal-goals-list-view/ChildPersonalGoalsListView";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Personal Goals List",
    href: "/foster-child/child-goals-and-pathway/child-personal-goals/",
  },
  {
    name: "Personal Goal",
    href: "/",
  },
];

const PAGE_TITLE = "Child Personal Goals";

export default function PersonalGoalsListView() {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      <Page title={PAGE_TITLE}>
        <ChildPersonalGoalsListView disabled />
      </Page>
    </Layout>
  );
}
