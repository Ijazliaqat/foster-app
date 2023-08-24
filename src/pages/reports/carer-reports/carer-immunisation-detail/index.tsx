import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CarerImmunisationDetail from "@root/sections/reports/carer-report/carer-immunisation-detail-reports/CarerImmunisationDetail";

const PAGE_TITLE = "Carer Immunisation Detail Reports";

CarerImmunisationDetailLayout.getLayout = function getLayout(page: any) {
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

export default function CarerImmunisationDetailLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <CarerImmunisationDetail />
    </Page>
  );
}
