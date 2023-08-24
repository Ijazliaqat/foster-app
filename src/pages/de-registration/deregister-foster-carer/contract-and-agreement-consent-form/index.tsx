import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ConsentFormComp from "@root/sections/de-registration/deregister-foster-dashboard/dereg-contracts-agreements/consent-form/ConsentForm";

// ==========================================================

const PAGE_TILE = "De-Registration";

Consent.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "De-reg Contracts and Agreements ",
          href: "/de-registration/deregister-foster-carer",
        },
        {
          name: "Consent Form",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Consent() {
  return (
    <Page title={PAGE_TILE}>
      <ConsentFormComp />
    </Page>
  );
}
