import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "CLA Documentation List",
    href: `/foster-child/child-background-info/cla-documentation?fosterChildId=${query}`,
  },
  {
    name: "CLA Document",
    href: "/",
  },
];

let PAGE_TITLE: any;
// ----------------------------------------------------------------------

ClaDocumentation.getLayout = function getLayout(page: any) {
  PAGE_TITLE = `View Document`;
  return <Layout>{page}</Layout>;
};

export default function ClaDocumentation() {
  const router = useRouter();
  PAGE_TITLE = `View ${router?.query?.cla_document_type} Document`;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <ClaDocumentationForm />
      </Paper>
    </Page>
  );
}
