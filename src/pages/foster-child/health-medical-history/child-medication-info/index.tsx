import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ChildMedicationInfotable from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfotable";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants

// ----------------------------------------------------------------------

ChildMedicationInfo.getLayout = function getLayout(page: any) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChildMedicationInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Medication Info",
      href: "",
    },
  ];
  const PAGE_TITLE = "Child Medication Info";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ChildMedicationInfotable fosterChildId={fosterChildId} />
    </Box>
  );
}
