import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddBirthParent from "@root/sections/reports/ifa-reports/FR-F3/add-birth-parent/AddBirthParent";

const PAGE_TITLE = "Reports";

FRF3.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-F3-birth-parent",
        },
        {
          name:"FR-F3: Birth Parent/Birth Family Member"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRF3() {
  return (
    <Page title={PAGE_TITLE}>
      <AddBirthParent/>
    </Page>
  );
}
