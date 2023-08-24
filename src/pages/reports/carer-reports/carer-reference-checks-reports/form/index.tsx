import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import CarerReferenceChecksForm from "@root/sections/reports/carer-report/carer-reference-checks-reports/carer-reference-checks-form/CarerReferenceChecksForm";

const PAGE_TITLE = "Carer Reference Checks Reports";

CarerReferenceChecksFormLayout.getLayout = function getLayout(page: any) {
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
        name: "Carer Reference Checks Reports List",
      },
    ]}
    title={PAGE_TITLE}
  >
    {page}
  </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerReferenceChecksFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <CarerReferenceChecksForm action={action} id={id}/>
    </Page>
  );
}
