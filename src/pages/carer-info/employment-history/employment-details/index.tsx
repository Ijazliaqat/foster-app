import Layout from "@root/layouts";
import EmploymentDetailsCards from "@root/sections/carer-info/employment-history/employment-details/employment-details-cards";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Employnment Details",
    href: "/carer-info/employment-history/employment-details",
  },
];

const PAGE_TITLE = "Employnment Details";

EmploymentDetails.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function EmploymentDetails() {
  return <EmploymentDetailsCards />;
}
