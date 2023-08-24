import Layout from "@root/layouts";
import Recruitment from "@root/sections/recruitment/recruitment";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
const BREADCRUMBS = [
  {
    icon: <HomeIcon/>,
    href: "/",
    
  },
  {
    name: "Recruitment",
    href: "",
  },
];
const Forms = () => {
  return (
    <div>
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title="Recuitment"
      >
        <Recruitment />
      </Layout>
    </div>
  );
};
export default Forms;
