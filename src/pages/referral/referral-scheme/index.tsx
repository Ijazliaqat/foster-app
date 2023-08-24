import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import ReferralSchemeTable from "@root/sections/referral/referral-scheme/ReferralSchemeTable";

const PAGE_TITLE = "Referral Scheme";

ReferralScheme.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
        },
        {
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Referral Scheme"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ReferralScheme() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TITLE}>
      <ReferralSchemeTable />
    </Page>
  );
}





<ReferralSchemeTable />
