import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import ChildMissingPlacementForm from "@root/sections/reports/child-reports/child-missing-placements/child-missing-placements-form/ChildMissingPlacementsForm";
import ChildOOHForm from "@root/sections/reports/child-reports/child-OOH/child-ooh-form/ChildOOHForm";

const PAGE_TITLE = "Child OOH Report";

ChildOOHFormLayout.getLayout = function getLayout(page: any) {
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

export default function ChildOOHFormLayout() {
    const router = useRouter();
    const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <ChildOOHForm action={action} id={id}/>
    </Page>
  );
}
