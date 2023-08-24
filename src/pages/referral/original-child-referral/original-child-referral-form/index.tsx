import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import OriginalChildReferralForm from "@root/sections/referral/original-child-referral/original-child-referral-form/OriginalChildReferralForm";

// ==================================================================================

const PAGE_TILE = "Original Child Referral Form";

ChildReferral.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "",
          href: "/dashboard",
        },
        {
          name: "original-child-referral",
          href: "/referral/original-child-referral",
        },
        {
          name: "Child List",
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
      <OriginalChildReferralForm disabled={true} />
    </Page>
  );
}
