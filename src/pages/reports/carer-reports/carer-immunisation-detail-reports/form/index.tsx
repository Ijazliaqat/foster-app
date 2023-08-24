import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import CarerImmunisationDetailForm from "@root/sections/reports/carer-report/carer-immunisation-detail-reports/carer-immunisation-detail-form/CarerImmunisationDetailForm";

const PAGE_TITLE = "Carer Immunisation Detail Reports";

CarerImmunisationDetailFormLayout.getLayout = function getLayout(page: any) {
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
        name: "Carer Immunisation Detail Reports List",
      },
    ]}
    title={PAGE_TITLE}
  >
    {page}
  </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerImmunisationDetailFormLayout() {
  const router = useRouter();
  const { action} = router.query;
  return (
    <Page title={PAGE_TITLE} >
     <CarerImmunisationDetailForm action={action}/>
    </Page>
  );
}
