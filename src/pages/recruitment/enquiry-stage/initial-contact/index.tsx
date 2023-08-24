import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper} from "@mui/material";
import Page from "@root/components/Page";
import InitialContactForm from "@root/sections/enquiry-stage/initial-enquiry/initial-contact-form/initial-contact-form";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Enquiry Stage",
    href: "/recruitment",
  },
  {
    name: "Initial Contact",
    href: "",
  },
];

const PAGE_TITLE = "Recruitment";
// ----------------------------------------------------------------------

InitialContact.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function InitialContact() {
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        <InitialContactForm />
      </Paper>
    </Page>
  );
}
