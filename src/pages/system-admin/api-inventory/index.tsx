import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import ApiInventory from "@root/sections/system-admin/api-inventory/ApiInventory";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Api Inventory",
    href: "",
  },
];

const PAGE_TITLE = "Api Inventory";
Inventory.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function Inventory() {
  return (
    <Page title={PAGE_TITLE}>
      <ApiInventory />
    </Page>
  );
}
