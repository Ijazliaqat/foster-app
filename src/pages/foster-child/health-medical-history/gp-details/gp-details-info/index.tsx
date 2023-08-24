import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsInfoTabs from "@root/sections/foster-child/health-medical-history/gp-details/gp-details-info/gp-details-info-tabs/GPDetailsInfoTabs";
import { NextRouter, useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Health",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "GP Details Info",
    href: "",
  },
];

const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} GP Details Info List`;

// ----------------------------------------------------------------------

GPDetailsInfo.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GPDetailsInfo() {
  const router = useRouter();
  if (!!!router?.query?.fosterChildId) {
    router.push({
      pathname: "/foster-child-lists",
    });
    return;
  }
  return (
    <Page title={PAGE_TITLE(router?.query?.action)}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE(router?.query?.action)}
        breadcrumbs={BREADCRUMBS(router?.query)}
      />
      <GPDetailsInfoTabs />
    </Page>
  );
}
