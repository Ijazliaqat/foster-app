import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import HospitalizationTable from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

Hospitalization.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Hospitalization() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Hospitalization",
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
      name: "Hospitalization info list",
      href: "",
    },
  ];
  const PAGE_TITLE = "Hospitalization";
  // ----------------------------------------------------------------------
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HospitalizationTable fosterChildId={fosterChildId} />
    </Box>
  );
}
