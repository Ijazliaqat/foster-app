import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import CarerVacancyForm from "@root/sections/reports/carer-report/carer-vacancy-reports/carer-vacancy-form/CarerVacancyForm";

const PAGE_TITLE = "Carer Vacany Reports";

CarerVacancyFormLayout.getLayout = function getLayout(page: any) {
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
        name: "Carer Vacany Reports List",
      },
    ]}
    title={PAGE_TITLE}
  >
    {page}
  </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerVacancyFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <CarerVacancyForm action={action} id={id}/>
    </Page>
  );
}
