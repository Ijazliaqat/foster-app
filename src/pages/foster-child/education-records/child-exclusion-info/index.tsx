import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { ChildExclusionInfoList } from "@root/sections/foster-child/education-records/child-exclusion-info/child-exclusion-info-list/ChildExclusionInfoList";

const PAGE_TITLE = "Child Exclusion Info";

ChildExclusionInfoListPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "/child-info",
        },
        {
          name: "Child Exclusion Info List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ChildExclusionInfoListPage() {
    
  return (
    <Page title={PAGE_TITLE}>
      <ChildExclusionInfoList />
    </Page>
  );
}
