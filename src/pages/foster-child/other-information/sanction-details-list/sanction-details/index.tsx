import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { NextRouter, useRouter } from "next/router";
import SanctionDetailsTabs from "@root/sections/foster-child/other-information/sanction-details-list/sanction-details-tabs/SanctionDetailsTabs";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Sanction Details List",
    href: !!query?.fosterChildId
      ? `/foster-child/other-information/sanction-details-list?fosterChildId=${query?.fosterChildId}`
      : "/foster-child/other-information/sanction-details-list",
  },
  {
    name: "Sanction",
    href: "",
  },
];


const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} Sanction Details`;

SanctionDetails.getLayout = function getLayout(page: any, { query }: NextRouter) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(query)}
      title={PAGE_TITLE(query?.action)}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

export default function SanctionDetails() {
  const { query } = useRouter();
  return (
    <Page title={PAGE_TITLE(query?.action)}>
      <SanctionDetailsTabs />
    </Page>
  );
}
