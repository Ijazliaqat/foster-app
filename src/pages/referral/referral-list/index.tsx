import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import ReferralListTable from "@root/sections/referral/referral-list/ReferralListTable";

const PAGE_TILE = "Referral List";

const dynamicTitle = (pageTitle: any) => {
  console.log("pageTitle", pageTitle);
};

ReferralList.getLayout = function getLayout(page: any) {
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
          name: "Referral",
          href: "/referral",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ReferralList() {
  return (
    <Page title={PAGE_TILE}>
      <Card sx={{ p: 2 }}>
        <ReferralListTable />
      </Card>
    </Page>
  );
}
