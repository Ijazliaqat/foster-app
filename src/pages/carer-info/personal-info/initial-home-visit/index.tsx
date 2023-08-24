import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import InitialHomeVisitTab from "@root/sections/carer-info/personal-info/initial-home-visit/initial-home-visit-tab/InitialHomeVisitTab";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: !!query?.fosterCarerId
      ? `/carer-info?fosterCarerId=${query?.fosterCarerId}`
      : "/carer-info",
  },
  {
    name: "Initial Home Visit",
    href: "",
  },
];

const PAGE_TITLE = "Initial Home Visit";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InitialHomeVisit() {
  const router = useRouter();
  if (!!!router?.query?.fosterCarerId) {
    router.push({
      pathname: "/foster-carer-list",
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
      <InitialHomeVisitTab />
    </Page>
  );
}
