import Page from "@root/components/Page";
import Layout from "@root/layouts";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@emotion/react";
import PlacementReference from "@root/sections/recruitment/ready-for-placement/placement-preference/PlacementReference";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

PlacementPreference.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function PlacementPreference() {
  const router: any = useRouter();
  const { fosterCarerId } = router.query;

  if (!fosterCarerId) {
    router.push({
      pathname: "/recruitment",
      query: { fosterCarerId: fosterCarerId },
    });
  }

  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Ready For Placement",
      href: {
        pathname: "/recruitment",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Placement Preferences",
      href: "",
    },
  ];

  const PAGE_TITLE = "Recruitment";

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <PlacementReference fosterCarerId={fosterCarerId} />
    </Page>
  );
}
