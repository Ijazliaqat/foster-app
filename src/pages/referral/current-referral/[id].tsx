import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import CurrentReferralForm from "@root/sections/referral/current-referral/current-referral-form/CurrentReferralForm";

const PAGE_TILE = "Quick Referral Form";

CurrentReferrals.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Move to Current Referral",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function CurrentReferrals() {
  const router = useRouter();
  const { action, id } = router.query;
  const disabled = action === 'view' ? true : false;

  return (
    <Page title={PAGE_TILE}>
      <CurrentReferralForm disabled={disabled} />
    </Page>
  );
}
