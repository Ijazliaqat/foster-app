import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildDaylogEvents from "@root/sections/reports/child-reports/child-daylog-events/ChildDaylogEvents";

const PAGE_TITLE = "Child Daylog Events Report";

ChildDaylogEventsLayout.getLayout = function getLayout(page: any) {
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

export default function ChildDaylogEventsLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildDaylogEvents/>
    </Page>
  );
}
