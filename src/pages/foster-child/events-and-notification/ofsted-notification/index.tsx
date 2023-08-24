import React from "react";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import OfstedNotificationtable from "@root/sections/foster-child/events-and-notification/ofsted-Notification/OfstedNotificationtable";
OfstedNotification.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function OfstedNotification() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "child Info",
      href: {
        pathname: "/foster-child/events-and-notification/ofsted-notification",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Ofsted Notification List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Ofsted Notification";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <OfstedNotificationtable fosterChildId={fosterChildId} />
    </Box>
  );
}
