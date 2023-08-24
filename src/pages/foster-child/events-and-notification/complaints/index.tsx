import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import ComplaintsTable from "@root/sections/foster-child/events-and-notification/complaints/complaintsTable";

Complaints.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function Complaints() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Complaints",
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
      name: "Complaints List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Complaints";
  // ----------------------------------------------------------------------
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ComplaintsTable fosterChildId={fosterChildId} />
    </Box>
  );
}
