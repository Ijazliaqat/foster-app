import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import PanelActionsComments from "@root/sections/panel/panel-tools/panel-actions-comments/PanelActionsComments";

// ====================================================================================================

const PAGE_TILE = "Panel Case List";

ActionComment.getLayout = function getLayout(page: any) {
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
          name: "Panel Actions/Comments",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ActionComment() {
  return (
    <Page title={PAGE_TILE}>
      <PanelActionsComments />
    </Page>
  );
}
