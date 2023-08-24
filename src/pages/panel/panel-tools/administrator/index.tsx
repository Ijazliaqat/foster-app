import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home"; 
import PanelAdministrator from "@root/sections/panel/panel-tools/panel-administrator/PanelAdministrator";

// =============================================================================================

const PAGE_TILE = "Panel Minutes - Administrator";

Administrator.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/panel",
        },
        {
          name: "Panel Minutes",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Administrator() {
  return (
    <Page title={PAGE_TILE}>
      <PanelAdministrator />
    </Page>
  );
}
