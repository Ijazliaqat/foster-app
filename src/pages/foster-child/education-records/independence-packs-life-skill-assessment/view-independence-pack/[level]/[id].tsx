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
import { useGetIndependencePackQuery } from "@root/services/foster-child/education-records/independence-packs/IndependencePacks";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { defaultValues as bronzeDefaultValues } from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-bronze/index";

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

ViewIndependencePack.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewIndependencePack() {
  const theme: any = useTheme();
  const router = useRouter();
  const { level, id, fosterChildId } = router.query;
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

  const { data, isLoading, isError } = useGetIndependencePackQuery({
    id,
  });
  if (isLoading) {
    return <SkeletonFormdata />;
  }
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {level == "Bronze" ? (
        <IndependenceFormBronze
          inedependencePackData={{
            ...bronzeDefaultValues,
            ...(data?.data && {
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              fromDate: new Date(data?.data?.fromDate),
              toDate: new Date(data?.data?.toDate),
            }),
          }}
          action="view"
          disabled
          level={level}
        />
      ) : level == "Silver" ? (
        <IndependencePackFormSilver
          inedependencePackData={{
            ...bronzeDefaultValues,
            ...(data?.data && {
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              fromDate: new Date(data?.data?.fromDate),
              toDate: new Date(data?.data?.toDate),
            }),
          }}
          action="view"
          level={level}
        />
      ) : (
        <IndependencePackFormGold
          inedependencePackData={{
            ...bronzeDefaultValues,
            ...(data?.data && {
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              fromDate: new Date(data?.data?.fromDate),
              toDate: new Date(data?.data?.toDate),
            }),
          }}
          action="view"
          level={level}
        />
      )}
    </>
  );
}
