import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import PerformanceMonitoring from "@root/sections/system-admin/system-performance-monitoring/PerformanceMonitoring";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "System Performance Monitoring",
    href: "",
  },
];

const PAGE_TITLE = "System Performance Monitoring";
SystemPerformanceMonitoring.getLayout = function getLayout(page: any) {
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
export default function SystemPerformanceMonitoring() {
  return (
    <Page title={PAGE_TITLE}>
      <PerformanceMonitoring />
    </Page>
  );
}
