import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CarerReferenceChecks from "@root/sections/reports/carer-report/carer-reference-checks-reports/CarerReferenceChecks";

const PAGE_TITLE = "Carer Reference Checks Reports";

CarerReferenceCheckLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
        },

      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerReferenceCheckLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <CarerReferenceChecks/>
    </Page>
  );
}
