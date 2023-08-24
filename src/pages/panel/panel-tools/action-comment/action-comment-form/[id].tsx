import React from "react";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import PanelActionsForm from "@root/sections/panel/panel-tools/panel-actions-comments/panel-actions-form/PanelActionsForm";

// ==============================================================================================================

const PAGE_TITLE_VIEW = "View Panel Actions/Comments";
const PAGE_TITLE_EDIT = "Edit Panel Actions/Comments";

const getPageTitle = (action: string | string[] | undefined) => {
  if (action === "view") {
    return PAGE_TITLE_VIEW;
  } else if (action === "edit") {
    return PAGE_TITLE_EDIT;
  }
  return "";
};

const getLayout = (page: any) => { 

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/panel/panel-tools/action-comment",
        },
        {
          name: "Panle Actions/Comments",
        },
      ]}
      title={`Edit Panel Actions/Comments`}
    >
      {page}
    </Layout>
  );
};

export default function Agenda() {
  const { query } = useRouter();

  let disabled = query.action === "view" ? true : false;

  return (
    <Page title={getPageTitle(query.action)}>
      <PanelActionsForm disabled={disabled} />
    </Page>
  );
}

Agenda.getLayout = getLayout;
