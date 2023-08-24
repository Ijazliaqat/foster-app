import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeregisterSWAssessmentForm from "@root/sections/de-registration/deregister-foster-dashboard/dereg-initial-request/deregister-sw-assessment/form/DeregisterSWAssessmentForm";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/",
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
      <DeregisterSWAssessmentForm />
    </Layout>
  );
};
export default Forms;
