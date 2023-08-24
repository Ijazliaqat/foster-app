import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home"; 
import PanelAgenda from "@root/sections/panel/panel-tools/panel-agenda/PanelAgenda";

// ================================================================================

const PAGE_TILE = "Panel Agenda";

Agenda.getLayout = function getLayout(page: any) {
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
          name: "Panel Agenda",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Agenda() {
  return (
    <Page title={PAGE_TILE}>
      <PanelAgenda />
    </Page>
  );
}
