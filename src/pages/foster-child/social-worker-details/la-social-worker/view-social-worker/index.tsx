import React from "react";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ActiveSocialWorkerForm from "@root/sections/foster-child/social-worker-details/la-social-worker/active-social-worker/SocialWorkerForm";

ViewSocialWorker.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewSocialWorker() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "LA Social Worker List",
      href: {
        pathname: "/foster-child/social-worker-details/la-social-worker",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "LA Social Worker Details",
      href: "",
    },
  ];

  const PAGE_TITLE = "LA Social Worker ";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ActiveSocialWorkerForm disabled />
    </Box>
  );
}
