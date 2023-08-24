import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ReviewOfficerReportsTable } from "@root/sections/foster-child/child-reports/review-officer-reports/ReviewOfficerReportsTable";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/review-officer-reports?fosterChildId=${query}`,
  },
  {
    name: "Child Reports",
    href: "",
  },
];

const PAGE_TITLE = "Reviewing Officer Reports";
// ----------------------------------------------------------------------

ReviewOfficerReportsList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ReviewOfficerReportsList() {
  const router = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <ReviewOfficerReportsTable fosterChildId={router?.query?.fosterChildId} />
      </Paper>
    </Page>
  );
}
