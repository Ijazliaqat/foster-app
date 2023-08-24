import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import OrganisationalPoliciesTabs from "@root/sections/policies-and-guidelines/organisational-policies/organisational-policies-tabs/OrganisationalPoliciesTabs";

const PAGE_TILE = "Organisational";

OrganisationalPoliciesAdd.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Organisational Policies",
          href: "/policies-and-guidelines/organisational-policies",
        },
        {
          name: "Add",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function OrganisationalPoliciesAdd() {
  return (
    <Page title={PAGE_TILE}>
      <OrganisationalPoliciesTabs />
    </Page>
  );
}

