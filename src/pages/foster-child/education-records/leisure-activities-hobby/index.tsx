import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { LeisureActivitiesTable } from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

const PAGE_TITLE = "Leisure Activities List";

LeisureActivitiesHobby.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function LeisureActivitiesHobby() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;
  let BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Child Info",
      href: `/foster-child?fosterChildId=${fosterChildId}`,
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <LeisureActivitiesTable fosterChildId={fosterChildId} />
    </>
  );
}
