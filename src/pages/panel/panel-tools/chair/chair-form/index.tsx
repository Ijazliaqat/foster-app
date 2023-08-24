import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import PanelChairForm from "@root/sections/panel/panel-tools/panel-chair/panel-chair-form/PanelChairForm";

// ==================================================================================================

const PAGE_TILE = "View Panel Dashboard";

Chair.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/panel/panel-tools/chair",
        },
        {
          name: "Panel Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Chair() {
  return (
    <Page title={PAGE_TILE}>
      <PanelChairForm disabled={true} />
    </Page>
  );
}
