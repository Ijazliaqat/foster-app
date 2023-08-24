import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import ChildDaylogEventForm from "@root/sections/reports/child-reports/child-daylog-events/child-daylog-events-form/ChildDaylogEventsForm";

const PAGE_TITLE = "Child Daylog Events Report";

ChildDaylogEventsForm.getLayout = function getLayout(page: any) {
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

export default function ChildDaylogEventsForm() {
    const router = useRouter();
    const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <ChildDaylogEventForm action={action} id={id}/>
    </Page>
  );
}
