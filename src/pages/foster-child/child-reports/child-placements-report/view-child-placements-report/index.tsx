import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildPlacementsReportForm } from "@root/sections/foster-child/child-reports/child-placements-report/form";

const PAGE_TITLE = "View Child Placement Reports";

ViewChildPlacementsReport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildPlacementsReport() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child/child-reports/child-placements-report",
        skipQueries: ["childReportsId"],
      }),
    },
    {
      name: "View Child Report",
      href: "",
    },
  ];
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ChildPlacementsReportForm disabled />
    </Page>
  );
}
