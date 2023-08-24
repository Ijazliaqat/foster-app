import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import Dashboard from "@root/sections/system-admin/Dashboard";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "All",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
SystemAdmin.getLayout = function getLayout(page: any) {
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
export default function SystemAdmin() {
  return (
    <Page title={PAGE_TITLE}>
      <Dashboard />
    </Page>
  );
}
