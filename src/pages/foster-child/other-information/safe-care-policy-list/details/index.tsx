import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import SafeCarePolicyDetails from "@root/sections/foster-child/other-information/safe-care-policy-list/details/SafeCarePolicyDetails";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "/ Safe Care Policies List",
    href: `/foster-child/other-information/safe-care-policy-list/?fosterChildId=${query.fosterChildId}`,
  },
  {
    name: "Safe Care Policy",
    href: "/foster-child/other-information/safe-care-policy",
  },
];

const PAGE_TITLE = "Safe Care Policy";

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
      <SafeCarePolicyDetails />
    </Page>
  );
}
