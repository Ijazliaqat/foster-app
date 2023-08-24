import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import AgencyDecision from "@root/sections/de-registration/final-de-reg/agency-decision/AgencyDecision";

const PAGE_TITLE = "De-Registration";

AgencyDecisionLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          name: "final-de-reg",
          href: "/de-registration/deregister-foster-carer",
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

export default function AgencyDecisionLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <AgencyDecision />
    </Page>
  );
}
