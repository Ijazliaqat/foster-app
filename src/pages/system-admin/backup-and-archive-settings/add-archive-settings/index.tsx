import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { AddArchiveSettings } from "@root/sections/system-admin/backup-and-archive-settings/add-backup-and-archive-settings";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Backup And Archive Settings",
    href: "/system-admin/backup-and-archive-settings",
  },
  {
    name: "Add Backup And Archive Settings",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
BackupAndArchiveSettings.getLayout = function getLayout(page: any) {
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
export default function BackupAndArchiveSettings() {
  return (
    <Page title={PAGE_TITLE}>
      <AddArchiveSettings/>
      
    </Page>
  );
}
