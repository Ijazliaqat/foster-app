import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import YoungPersonLivingHousehold from "@root/sections/reports/child-reports/young-person-living-household/YoungPersonLivingHousehold";

const PAGE_TITLE = "Young Person Living in the Household's Comments";

YoungPesonLivingHouseholdLayout.getLayout = function getLayout(page: any) {
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

export default function YoungPesonLivingHouseholdLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <YoungPersonLivingHousehold />
    </Page>
  );
}
