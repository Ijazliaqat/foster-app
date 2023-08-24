
import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import SupervisoryHomeVisitForm from "@root/sections/reports/child-reports/supervisory-home-visit/supervisory-home-visit-form/SupervisoryHomeVisitForm";

const PAGE_TITLE = "Supervisory Home Visit";

SupervisoryHomeVisitFormLayout.getLayout = function getLayout(page: any) {
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
          name: "Child Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ---------------------------------------------------------------------- 

export default function SupervisoryHomeVisitFormLayout() {
    const router = useRouter();
    const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <SupervisoryHomeVisitForm action={action} id={id}/>
    </Page>
  );
}
