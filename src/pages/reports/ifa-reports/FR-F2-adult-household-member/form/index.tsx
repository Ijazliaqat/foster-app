import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddAdultHouseHoldMember from "@root/sections/reports/ifa-reports/FR-F2/add-adult-house-hold-member/AddAdultHouseHoldMember";

const PAGE_TITLE = "Reports";

FRF2.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-F2-adult-household-member",
        },
        {
          name:"FR-F2: Adult Household Member/Support To Foster Carer"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRF2() {
  return (
    <Page title={PAGE_TITLE}>
      <AddAdultHouseHoldMember/>
    </Page>
  );
}
