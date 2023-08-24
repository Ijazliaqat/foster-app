import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import CarerTrainingForm from "@root/sections/reports/carer-report/carer-training-reports/carer-training-form/CarerTrainingForm";

const PAGE_TITLE = "Carer Training Reports";

CarerTrainingFormLayout.getLayout = function getLayout(page: any) {
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
        name: "Carer Training Reports List",
      },
    ]}
    title={PAGE_TITLE}
  >
    {page}
  </Layout>
  );
};
// ----------------------------------------------------------------------

export default function CarerTrainingFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE} >
     <CarerTrainingForm action={action} id={id}/>
    </Page>
  );
}
