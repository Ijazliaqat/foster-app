import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import GovtLegislationsTabs from "@root/sections/policies-and-guidelines/govt-legislation/govt-legislation-tabs/GovtLegislationTabs";

const PAGE_TILE = "Policies and Guidelines";

GovtLegislationsAdd.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/",
        },
        {
          name: "Govt. Legislations and Regulations",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function GovtLegislationsAdd() {
  return (
    <Page title={PAGE_TILE}>
      <GovtLegislationsTabs />
    </Page>
  );
}
