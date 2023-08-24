import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { IndependencePackTable } from "@root/sections/foster-child/education-records/independence-packs";
import IndependenceFormBronze from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-bronze/IndependencePackFormBronze";
import { useRouter } from "next/router";
import {
  Breadcrumbs,
  TitleWithBreadcrumbLinks,
} from "@root/components/PageBreadcrumbs";
import IndependencePackFormSilver from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-silver/IndependencePackFormSilver";
import IndependencePackFormGold from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/indpendence-pack-form-gold/IndependencePackFormGold";

const PAGE_TITLE = "Independence Pack";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "IndependencePack-Life Skill Assessment",
    href: "/child-info",
  },
];

AddIndependencePack.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AddIndependencePack() {
  const theme: any = useTheme();
  const router = useRouter();
  const { level, fosterChildId } = router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "IndependencePack-Life Skill Assessment",
      href: `/foster-child/education-records/independence-packs-life-skill-assessment?fosterChildId=${fosterChildId}`,
    },
    {
      name: `${level} Level`,
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
      {level == "Bronze" ? (
        <IndependenceFormBronze action="add" level={level} />
      ) : level == "Silver" ? (
        <IndependencePackFormSilver action="add" level={level} />
      ) : (
        <IndependencePackFormGold action="add" level={level} />
      )}
    </>
  );
}
