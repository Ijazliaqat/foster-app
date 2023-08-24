import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import HospitalInfoListTable from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoListTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

// Constants

// ----------------------------------------------------------------------

HospitalInfoList.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HospitalInfoList() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Hospital info List",
      href: "/carer-info/other-information/next-of-kin",
    },
    {
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Hospital info List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Hospital info List";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HospitalInfoListTable fosterChildId={fosterChildId} />
    </Box>
  );
}
