import React from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import AddFosterChildRequestForm from "@root/sections/referral/foster-child-request-form/add-foster-child-request-form/AddFosterChildRequestForm";


const PAGE_TITLE = "Child Request Form";

// ----------------------------------------------------------------------

ApplicationForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral",
          href: "/referral",
        },
        {
          name:"Child List",
        },
      ]}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------
export default function ApplicationForm() {
 
  

  
  return (
    <Page title={PAGE_TITLE}>
      <AddFosterChildRequestForm/>
  </Page>
  );
}