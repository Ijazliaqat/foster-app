import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import BehavioralInfoForm from "@root/sections/foster-child/health-medical-history/behavioral-info-list/behavioralInfoForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

BehaviouralInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function BehaviouralInfo() {
  const Router: any = useRouter();
  const { action, behaviouralInfoId, fosterChildId } = Router.query;
  const PAGE_TITLE = `${
    action.charAt(0).toUpperCase() + action.slice(1)
  } Behavioural Info`;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Behavioural Info list",
      href: "",
    },
  ];
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <BehavioralInfoForm
        action={action}
        fosterChildId={fosterChildId}
        behaviouralInfoId={behaviouralInfoId}
      />
    </Box>
  );
}
