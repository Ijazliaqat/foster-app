import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import ActiveCarersContactForm from "@root/sections/reports/carer-report/active-carers-contacts-reports/active-carers-contacts-form/ActiveCarersContactsForm";

const PAGE_TITLE = "Active Carers Contacts Reports";

ActiveCarersContactFormLayout.getLayout = function getLayout(page: any) {
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
          name: "Active Carers Contacts Reports List",
        },
   
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ActiveCarersContactFormLayout() {
  const router = useRouter();
  const { action } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <ActiveCarersContactForm action={action} />
    </Page>
  );
}
