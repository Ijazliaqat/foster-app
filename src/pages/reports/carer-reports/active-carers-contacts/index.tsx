import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ActiveCarersContacts from "@root/sections/reports/carer-report/active-carers-contacts-reports/ActiveCarersContacts";


const PAGE_TITLE = "Active Carers Contacts Reports";

ActiveCarersContactsLayout.getLayout = function getLayout(page: any) {
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

export default function ActiveCarersContactsLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <ActiveCarersContacts/>
    </Page>
  );
}
