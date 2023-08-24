import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CurrentReferralTable from "@root/sections/referral/current-referral/CurrentReferral";

const PAGE_TILE = "Move to Current Referral";

CurrentReferral.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referrals",
          href: "/referral",
        },
        {
          name: "",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function CurrentReferral() {
  return (
    <Page title={PAGE_TILE}>
      <CurrentReferralTable />
    </Page>
  );
}
