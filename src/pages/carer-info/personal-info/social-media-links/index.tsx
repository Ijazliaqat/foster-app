import Layout from "@root/layouts";
import React from "react";
import { SocialMediaLinksSection } from "@root/sections/carer-info/personal-info/social-media-links";
import Page from "@root/components/Page";

// icons
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
const PAGE_TITLE = "Social Media Links";

SocialMediaLinks.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function SocialMediaLinks() {
  let router = useRouter();
  let { fosterCarerId } = router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: `/`,
    },
    {
      name: "Carer Info",
      href: `/carer-info?fosterCarerId=${fosterCarerId}`,
    },
    {
      name: "Personal Info",
      href: ``,
    },
  ];
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <SocialMediaLinksSection />
    </>
  );
}
