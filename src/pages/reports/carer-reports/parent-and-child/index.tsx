import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ParentAndChild from "@root/sections/reports/carer-report/parent-and-child-reports/ParentAndChild";


const PAGE_TITLE = "Parent And Child Reports";

ParentAndChildLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
     
        },
       
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ParentAndChildLayout() {
  return <Page title={PAGE_TITLE}>
    <ParentAndChild/>
  </Page>;
}
