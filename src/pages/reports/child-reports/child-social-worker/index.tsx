import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildSocialWorker from "@root/sections/reports/child-reports/child-social-worker/ChildSocialWorker";

const PAGE_TITLE = "Child Social Worker Reports";

ChildSocialWorkerLayout.getLayout = function getLayout(page: any) {
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

export default function ChildSocialWorkerLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildSocialWorker />
    </Page>
  );
}
