import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import SanctionDetailsLists from "@root/sections/foster-child/other-information/sanction-details-list/SanctionDetailsList";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Sanctions List",
    href: "",
  },
];

const PAGE_TITLE = "Sanction Details";

SanctionDetailsList.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

export default function SanctionDetailsList() {
  const { query } = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(query)}
        title={PAGE_TITLE}
      />
      <SanctionDetailsLists />
    </Page>
  );
}
