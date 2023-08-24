import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home"; 
import PanelAdministratorForm from "@root/sections/panel/panel-tools/panel-administrator/panel-administrator-form/panelAdministratorForm";

// ====================================================================================================

const PAGE_TILE = "View Panel Minutes - Administrator";

Administrator.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/panel/panel-tools/administrator",
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
      <PanelAdministratorForm disabled={true} />
    </Page>
  );
}
