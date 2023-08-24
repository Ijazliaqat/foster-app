import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card } from "@mui/material";
import IncidentManagementTable from "@root/sections/safeguarding/child-protection/incident-management/IncidentManagementTable";

const PAGE_TITLE = "Incident Management List";

IncidentManagement.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safeguarding",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function IncidentManagement() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <IncidentManagementTable  />
      </Card>
    </Page>
  );
}
