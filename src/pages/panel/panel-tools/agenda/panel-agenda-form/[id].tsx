import React from "react";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home"; 
import PanelAgendaForm from "@root/sections/panel/panel-tools/panel-agenda/panel-agenda-form/panelAgendaForm";

// =======================================================================================================

const PAGE_TILE = "View Panel Agenda";

Agenda.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/panel/panel-tools/agenda",
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
  const { query } = useRouter();

  let disabled = query.action === "view" ? true : false;

  return (
    <Page title={PAGE_TILE}>
      <PanelAgendaForm disabled={disabled} />
    </Page>
  );
}