import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ImmunisationTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-table/immunisationTable";
import { useRouter } from "next/router";
import { useGetImmunisationListQuery } from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";
import {
  TitleWithBreadcrumbLinks,
  TitleWithBreadcrumbs,
} from "@root/components/PageBreadcrumbs";

Immunisation.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function Immunisation() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;
  let BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: `/`,
    },
    {
      name: "child Info",
      href: `/foster-child?fosterChildId=${fosterChildId}`,
    },
    {
      name: "Immunisation info list",
      href: "",
    },
  ];
  const PAGE_TITLE = "Immunisation";

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ImmunisationTable fosterChildId={fosterChildId} />
    </Box>
  );
}
