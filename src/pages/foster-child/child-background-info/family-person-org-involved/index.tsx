import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import FamilyPersonListTable from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/FamilyPersonListTable";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-background-info/family-person-org-involved?fosterChildId=${query}`,
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "Family Persons & Org Involved";
// ----------------------------------------------------------------------

FamilyPersonList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function FamilyPersonList() {
  const router = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <FamilyPersonListTable fosterChildId={router?.query?.fosterChildId} />
      </Paper>
    </Page>
  );
}
