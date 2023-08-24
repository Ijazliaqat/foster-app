import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FosteringServiceManager from "@root/sections/reports/child-reports/fostering-service-manager/FosteringServiceManager";

const PAGE_TITLE = "Fostering Service Manager Report";

FosteringServiceManagerLayout.getLayout = function getLayout(page: any) {
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

export default function FosteringServiceManagerLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <FosteringServiceManager />
    </Page>
  );
}
