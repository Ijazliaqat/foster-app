import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import MedicalAppointmentsTable from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsTable";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants

// ----------------------------------------------------------------------

MedicalAppointments.getLayout = function getLayout(page: any) {
  return (
   <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>
  );
};

// ----------------------------------------------------------------------

export default function MedicalAppointments() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: null,
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
      name: "Medical Appointments info list",
      href: "",
    },
  ];
  const PAGE_TITLE = "Medical Appointments";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <MedicalAppointmentsTable  fosterChildId={fosterChildId} />
    </Box>
  );
}
