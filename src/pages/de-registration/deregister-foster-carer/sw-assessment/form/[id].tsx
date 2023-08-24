import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeregisterSWAssessmentForm from "@root/sections/de-registration/deregister-foster-dashboard/dereg-initial-request/deregister-sw-assessment/form/DeregisterSWAssessmentForm";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { action } = router.query;
  console.log(router.query);
  
  const disabled = action === 'view' ? true : false;
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title="De-Registration"
    >
      <DeregisterSWAssessmentForm disabled={disabled} />
    </Layout>
  );
};
export default Forms;
