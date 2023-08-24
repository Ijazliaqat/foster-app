import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "/ Child Reports List",
    href: `/foster-child/child-reports/child-living-in-households-comments?fosterChildId=${query.fosterChildId}`,
  },
  {
    name: "Child Report ",
    href: "/",
  },
];

const PAGE_TITLE = "VIEW FOSTERED CHILD’S COMMENTS";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InitialHomeVisit() {
  const router = useRouter();
  if (!!!router?.query?.fosterChildId) {
    router.push({
      pathname: "/foster-child-lists",
    });
    return;
  }
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE}
        breadcrumbs={BREADCRUMBS(router?.query)}
      />
      Here will be the details
    </Page>
  );
}
