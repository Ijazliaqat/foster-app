import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import OrignalChildReferral from "@root/sections/referral/original-child-referral/OrignalChildReferral";

// =======================================================================================================

const PAGE_TILE = "Original Child Referral List";

ChildReferral.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/referral",
        },
        {
          name: "Referral",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ChildReferral() {
  return (
    <Page title={PAGE_TILE}>
      <OrignalChildReferral />
    </Page>
  );
}
