import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import ParentAndChildForm from "@root/sections/reports/carer-report/parent-and-child-reports/parent-and-child-form.tsx/ParentAndChildForm";

const PAGE_TITLE = "Parent And Child Reports";

ParentAndChildFormLayout.getLayout = function getLayout(page: any) {
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
          name: "Parent And Child Reports List",
       
        },
      
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ParentAndChildFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <ParentAndChildForm action={action} id={id}/>
    </Page>
  );
}
