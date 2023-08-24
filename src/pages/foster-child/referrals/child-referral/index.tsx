import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildReferralTable } from "@root/sections/foster-child/referrals/child-referral";

const PAGE_TITLE = "Child Referral";

ChildReferral.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildReferral() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <ChildReferralTable />
    </Page>
  );
}
