import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildLivingHousehold from "@root/sections/reports/child-reports/child-living-household/ChildLivingHousehold";

const PAGE_TITLE = "Child Living in the Household's Comments";

ChildLivingHouseholdLayout.getLayout = function getLayout(page: any) {
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

export default function ChildLivingHouseholdLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <ChildLivingHousehold />
    </Page>
  );
}
