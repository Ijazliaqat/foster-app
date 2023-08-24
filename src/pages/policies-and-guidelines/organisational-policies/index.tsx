import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import OrganisationalPolicies from "@root/sections/policies-and-guidelines/organisational-policies/OrganisationalPolicies";

const PAGE_TILE = "Organisational Policies";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Policies and Guidelines",
          href: "/policies-and-guidelines",
        },
        {
          name: "All",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <OrganisationalPolicies />
    </Page>
  );
}
