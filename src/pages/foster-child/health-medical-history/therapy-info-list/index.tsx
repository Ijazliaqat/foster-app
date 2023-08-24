import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import TherapyInfoList from "@root/sections/foster-child/health-medical-history/therapy-info/TherapyInfoList";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "/ Child Info",
    href: `/foster-child/?fosterChildId=${query.fosterChildId}`,
  },
  {
    name: "Therapy Info List",
    href: "/",
  },
];

const PAGE_TITLE = "Therapy Info";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InitialHomeVisit() {
  const router = useRouter();

  if (!router?.query?.fosterChildId) {
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
      <TherapyInfoList />
    </Page>
  );
}
