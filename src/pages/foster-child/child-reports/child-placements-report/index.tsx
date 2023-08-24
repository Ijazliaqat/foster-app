import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildPlacementsReportTable from "@root/sections/foster-child/child-reports/child-placements-report/ChildPlacementsReportTable";

const PAGE_TITLE = "Child Placement Reports";

ChildPlacementsReport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildPlacementsReport() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "Child Reports",
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

      <ChildPlacementsReportTable />
    </Page>
  );
}
