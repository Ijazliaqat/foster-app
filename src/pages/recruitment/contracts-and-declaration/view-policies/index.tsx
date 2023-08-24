import React from "react";
import Page from "@root/components/Page";
import Layout from "@root/layouts";

import HomeIcon from "@mui/icons-material/Home";
import AgencyPolicyAgreements from "@root/sections/de-registration/deregister-foster-dashboard/dereg-contracts-agreements/agency-policy-agreements/AgencyPolicyAgreements";
import { useRouter } from "next/router";
const ContractsAndDeclarationViewPolicies = () => {
  const route = useRouter();
  const PAGE_TITLE = "Recruitment";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Contract & Declaration",
      href: "/foster-carer-recruitment",
    },
    {
      name: "Policies",
      href: "",
    },
  ];
  return ( 
    <Page title="View-Decalaration">
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      >
        <AgencyPolicyAgreements />
      </Layout>
    </Page>
  );
};
export default ContractsAndDeclarationViewPolicies;
