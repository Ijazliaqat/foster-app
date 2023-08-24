import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HandbookPolicies from "@root/sections/policies-and-guidelines/handbooks-policies/HandbookPolicies";

const PAGE_TILE = "Policies and Guidelines";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/policies-and-guidelines",
        },
        {
          name: "Handbooks",
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
      <HandbookPolicies />
    </Page>
  );
}

