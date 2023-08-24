import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AgencyDecisionForm from "@root/sections/de-registration/final-de-reg/agency-decision/agency-decision-form/AgencyDecisionForm";
const PAGE_TITLE = "Agency DeRegister";

AgencyDecisionFormLayout.getLayout = function getLayout(page: any) {
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
          name: "de-registration",
          href: "/de-registration",
        },
        {
          name: "final-de-reg",
          href: "/final-de-reg",
        },
        {
          name: "agency-decision",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function AgencyDecisionFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <AgencyDecisionForm action={action} id={id}/>
    </Page>
  ); 
}
   