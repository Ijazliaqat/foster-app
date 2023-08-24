import React from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import AddFosterChildRequestForm from "@root/sections/referral/foster-child-request-form/add-foster-child-request-form/AddFosterChildRequestForm";


const PAGE_TITLE = "Child Request Form";

export const tabsArray = [
  "Personal Info",
  "LA-Details",
  "Upload Documents",
];

// ----------------------------------------------------------------------

FosterChildEequestForm.getLayout = function getLayout(page: any) {
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
          name: "Carer list",
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

export default function FosterChildEequestForm() {

  return (
    <Page title={PAGE_TITLE}>
      <AddFosterChildRequestForm />
    </Page>
  );
}