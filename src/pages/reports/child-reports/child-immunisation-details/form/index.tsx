import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildImmunisationDetailsForm from "@root/sections/reports/child-reports/child-immunisation-details/child-immunisation-details-form/ChildImmunisationDetailsForm";

const PAGE_TITLE = "Child Immunisation Details Report";

ChildImmunisationDetailForm.getLayout = function getLayout(page: any) {
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

export default function ChildImmunisationDetailForm() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildImmunisationDetailsForm />
    </Page>
  );
}
