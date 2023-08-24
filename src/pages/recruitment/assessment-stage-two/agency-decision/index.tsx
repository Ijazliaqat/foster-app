import Page from "@root/components/Page";

import Layout from "@root/layouts";

import React from "react";
import PanelCaseListTable from "@root/sections/recruitment/assessment-stage-two/agency-decision/PanelCaseListTable";

// ----------------------------------------------------------------------

import HomeIcon from "@mui/icons-material/Home";

import { Box, Card, Grid } from "@mui/material";

import { useTheme } from "@emotion/react";

import IsFetching from "@root/components/loaders/IsFetching";
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Assessment stage 2",
    href: "/recruitment",
  },
  {
    name: "Agency Decision",
    href: "",
  },
];

const PAGE_TITLE = "Agency Decision";

AgencyDecision.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function AgencyDecision() {
  const theme: any = useTheme();

  let role = "foster-carer";

  // if (isError) {
  //   return <Error />;
  // }

  return (
    <Page title={PAGE_TITLE}>
      <PanelCaseListTable />
    </Page>
  );
}
