import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import RecordCriticalIncidentsForm from "@root/sections/reports/carer-report/foster-carer-record-critical-incidents-reports/record-critical-incidents-form/RecordCriticalIncidentsForm";

const PAGE_TITLE = "Carer Incidents Reports";

RecordCriticalIncidentsFormLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Carer Incidents Reports List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function RecordCriticalIncidentsFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <RecordCriticalIncidentsForm action={action} id={id} />
    </Page>
  );
}
