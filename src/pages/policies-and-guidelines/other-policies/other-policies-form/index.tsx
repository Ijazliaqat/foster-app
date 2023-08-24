import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import OtherPoliciesTabsForm from "@root/sections/policies-and-guidelines/other-policies/other-policies-tabs-form/OtherPoliciesTabsForm";

const PAGE_TILE = "Other Policies";

OtherPoliciesTabsAdd.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/policies-and-guidelines/other-policies",
        },
        {
          name: "Other Policies",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function OtherPoliciesTabsAdd() {
  return (
    <Page title={PAGE_TILE}>
      <OtherPoliciesTabsForm />
    </Page>
  );
}
