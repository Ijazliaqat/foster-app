import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CompletedAuditTable from "@root/sections/audits/completed-audits/CompletedAuditsTable";

// =======================================================================================================

const PAGE_TILE = "Completed Audits";

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
      <CompletedAuditTable />
    </Page>
  );
}
