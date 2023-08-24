import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Marketing from "@root/sections/marketing/dashboard/Marketing";

const PAGE_TITLE = "Marketing";
MarketingDashboardLayout.getLayout = function getLayout(page: any) {
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
          name: "IFA",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingDashboardLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <Marketing />
    </Page>
  );
}
