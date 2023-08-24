import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { Box } from "@mui/material";
import { StudySupportInfoTable } from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoTable";


StudySupportInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function StudySupportInfo() {
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
      name: "Study Support Info List",
      href: "",
    },
  ];

  const PAGE_TITLE = "Study Support Info ";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <StudySupportInfoTable fosterChildId={fosterChildId} />
    </Box>
  );
}
