import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeregisterSWAssessment from "@root/sections/de-registration/deregister-foster-dashboard/dereg-initial-request/deregister-sw-assessment/DeregisterSWAssessment";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/de-registration/deregister-foster-carer",
    name: 'De-red Initial Request'

  },
  {
    name: "SW Assessment Form",
    href: "",
  },
];

const Forms = () => {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title="De-Registration"
    >
      <DeregisterSWAssessment />
    </Layout>
  );
};
export default Forms;
