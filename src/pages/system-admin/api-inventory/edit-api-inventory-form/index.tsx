import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";

import InventoryTableForm from "@root/sections/system-admin/api-inventory/api-inventory-table/inventory-table-form/InventoryTableForm";

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

const PAGE_TITLE = "Edit Api Inventory Form";
InventoryForm.getLayout = function getLayout(page: any) {
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
export default function InventoryForm() {
  return (
    <Page title={PAGE_TITLE}>
      <InventoryTableForm />
    </Page>
  );
}