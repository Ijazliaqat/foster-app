import React from "react";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import IncidentManagementForm from "@root/sections/safeguarding/child-protection/incident-management/incident-management-form/IncidentManagementForm";

const PAGE_TITLE = "Add Incident Management";

ViewIncidentManagement.getLayout = function getLayout(page: any) {
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
          name: "Incident Management List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewIncidentManagement() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <IncidentManagementForm action={action} id={id} />
    </Page>
  );
}
