import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import ChildEducationInfoTabs from "@root/sections/foster-child/education-records/child-education/child-education-tabs/ChildEducationInfoTabs";
import { NextRouter, useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Education Info List",
    href: !!query?.fosterChildId
      ? `/foster-child/education-records/child-education?fosterChildId=${query?.fosterChildId}`
      : "/foster-child/education-records/child-education",
  },
  {
    name: "Education Info",
    href: "",
  },
];


const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} Child Education Info List`;

// ----------------------------------------------------------------------

ChildEducationInfo.getLayout = function getLayout(page: any, { query }: NextRouter) {
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

// ----------------------------------------------------------------------

export default function ChildEducationInfo() {
  const { query } = useRouter();
  return (
    <Page title={PAGE_TITLE(query?.action)}>
      <ChildEducationInfoTabs />
    </Page>
  );
}
