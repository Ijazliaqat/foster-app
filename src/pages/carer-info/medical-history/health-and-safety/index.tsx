import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { HealthAndSafetyMain } from "@root/sections/carer-info/medical-history/health-and-safety/HealthAndSafetyMain";
import React from "react";

// ----------------------------------------------------------------------

HealthAndSafety.getLayout = function getLayout(page: any) {
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: "/carer-info/",
    },
    {
      name: "Health & Safety",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={"Health & Safety"}
    >
      {page}
    </Layout>
  );
};
 
// ----------------------------------------------------------------------

export default function HealthAndSafety() {
  return (
    <>
      <HealthAndSafetyMain />
    </>
  );
}
