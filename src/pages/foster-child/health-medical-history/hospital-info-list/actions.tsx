import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HospitalInfoListFrom from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoListFrom";
import HospitalInfoUpload from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoUpload";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

HospitalinfoActions.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HospitalinfoActions() {
  const Router: any = useRouter();
  const { action, fosterChildId, hospitalinfoId } = Router.query;
  const PAGE_TITLE = "Hospital info List";

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Hospitalinfolist",
      href: {
        pathname: "/foster-child/health-medical-history/hospital-info-list",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Hospital Info",
      href: "/foster-child/health-medical-history/hospital-info-list/",
    },
  ];

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs tabsDataArray={["HospitalInfo", "Uploaded Documents"]}>
        <HospitalInfoListFrom
          action={action}
          fosterChildId={fosterChildId}
          hospitalinfoId={hospitalinfoId}
        />
        <HospitalInfoUpload
          fosterChildId={fosterChildId}
          hospitalinfoId={hospitalinfoId}
        />
      </HorizaontalTabs>
    </Box>
  );
}
