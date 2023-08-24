import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildMedicationDetails from "@root/sections/reports/child-reports/child-medication-details/ChildMedicationDetails";

const PAGE_TITLE = "Child Medication Details Report";

ChildMedicationDetailsLAyout.getLayout = function getLayout(page: any) {
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

export default function ChildMedicationDetailsLAyout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildMedicationDetails />
    </Page>
  );
}
