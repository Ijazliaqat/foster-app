import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import BulkOperationsTable from "@root/sections/system-admin/bulk-operations/BulkOperationsTable";

const PAGE_TITLE = "System Administration";

SafeguardingChildAdvocacy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "System Admin",
          href: "/system-admin",
        },
        {
          name: "Bulk Operations",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingChildAdvocacy() {
  return (
    <Page title={PAGE_TITLE}>
      <BulkOperationsTable />
    </Page>
  );
}
