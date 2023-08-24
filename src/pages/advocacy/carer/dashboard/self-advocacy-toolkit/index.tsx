import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SelfAdvocacyToolkit from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/self-advocacy-toolkit/SelfAdvocacyToolkit";

// ==================================================================================
const PAGE_TILE = "Carer’s Self Advocacy Toolkit";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Advocacy Dashboard",
          href: "/advocacy/carer/dashboard/",
        },
        {
          name: "Carer Advocacy",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <SelfAdvocacyToolkit />
    </Page>
  );
}
