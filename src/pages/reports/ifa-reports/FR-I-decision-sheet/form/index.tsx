import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddDecisionSheet from "@root/sections/reports/ifa-reports/FR-I/add-decision-form/AddDecisionSheet";

const PAGE_TITLE = "Reports";

FRD1.getLayout = function getLayout(page: any) {
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
          name: "IFA Reports",
          href: "/reports/ifa-reports/FR-I-decision-sheet",
        },
        {
          name:"FR-I-Decision Sheet"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRD1() {
  return (
    <Page title={PAGE_TITLE}>
      <AddDecisionSheet />
    </Page>
  );
}
