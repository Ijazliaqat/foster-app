import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import CarerPlacementForm from "@root/sections/reports/carer-report/carer-placement-reports/carer-placement-form/CarerPlacementForm";

const PAGE_TITLE = "Carer placement Reports";

SecondOpinionLayout.getLayout = function getLayout(page: any) {
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
        name: "Carer placement Reports List",
      },
    ]}
    title={PAGE_TITLE}
  >
    {page}
  </Layout>
  );
};
// ----------------------------------------------------------------------

export default function SecondOpinionLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE} >
     <CarerPlacementForm action={action} id={id}/>
    </Page>
  );
}
