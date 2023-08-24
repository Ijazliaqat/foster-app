import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeregisterFosterDashboard from "@root/sections/de-registration/deregister-foster-dashboard/DeregisterFosterDashboard";
// import DeregisterFosterDashboard from "@root/sections/deregister-foster-dashboard/DeregisterFosterDashboard";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/de-registration",

  },
  {
    name: "DeRegistration",
    href: "",
  },
];

const Forms = () => {
  return (
    <div>
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title="DeRegistration status of foster carer"
      >
        <DeregisterFosterDashboard />
      </Layout>
    </div>
  );
};
export default Forms;
