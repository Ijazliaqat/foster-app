import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import Notifications from "@root/sections/training/manage-trainees/notifications/Notifications";



const PAGE_TILE = "Notification Setting";

NotificationsTab.getLayout = function getLayout(page: any) {

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "training Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function NotificationsTab() {
  return (
    <Page title={PAGE_TILE}>
     <Notifications/>
    </Page>
  );
}