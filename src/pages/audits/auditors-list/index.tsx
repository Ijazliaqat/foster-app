import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AuditorsListTable from "@root/sections/audits/auditors-list/AuditorsListTable";

// =======================================================================================================

const PAGE_TILE = "Auditors List";

AuditorsList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/",
        },
        {
          name: "Auditor Dashboard",
          href: "/audits",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AuditorsList() {
  return (
    <Page title={PAGE_TILE}>
      <AuditorsListTable />
    </Page>
  );
}
