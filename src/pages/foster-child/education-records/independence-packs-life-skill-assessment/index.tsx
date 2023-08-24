import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { IndependencePackTable } from "@root/sections/foster-child/education-records/independence-packs";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const PAGE_TITLE = "IndependencePack-Life Skill Assessment";

IndependencePacksLifeSkillAssessment.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function IndependencePacksLifeSkillAssessment() {
  const theme: any = useTheme();
  const router: any = useRouter();
  const { fosterChildId } = router.query;

  const BREADCRUMBS = [
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
      <IndependencePackTable />
    </>
  );
}
