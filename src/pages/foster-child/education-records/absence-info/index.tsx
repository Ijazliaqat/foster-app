import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Box } from "@mui/material";
import AbsenceInfoListTable from "@root/sections/foster-child/education-records/absence-info/AbsenceInfoListTable";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

AbsenceInfo.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function AbsenceInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Absence Info List",
      href: "/foster-child/education-records/absence-info",
    },
  ];

  const PAGE_TITLE = "Absence Info";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <AbsenceInfoListTable fosterChildId={fosterChildId} />
    </Box>
  );
}
