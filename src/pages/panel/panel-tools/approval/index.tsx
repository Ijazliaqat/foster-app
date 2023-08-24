import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home"; 
import PanelApproval from "@root/sections/panel/panel-tools/panel-approval/PanelApproval";

// ================================================================================

const PAGE_TILE = "ADM - Decision";

Approval.getLayout = function getLayout(page: any) {
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

export default function Approval() {
  return (
    <Page title={PAGE_TILE}>
      <PanelApproval />
    </Page>
  );
}