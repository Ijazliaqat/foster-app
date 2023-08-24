import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import  {ImmunisationMain}  from "@root/sections/carer-info/medical-history/immunisations/Immunisations";

// ----------------------------------------------------------------------

// Immunisations.getLayout = function getLayout(page: any) {
//   return <Layout variant="dashboard">{page}</Layout>;
// };

// ----------------------------------------------------------------------

export default function Immunisations() {
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: "/carer-info/",
    },
    {
      name: "Immunisations List",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={'Immunisation'}
      >
      <ImmunisationMain />
      </Layout>
    
  );
}
