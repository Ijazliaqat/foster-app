import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsList from "@root/sections/foster-child/health-medical-history/gp-details/GPDetailsList";
import { useRouter } from "next/router";
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
    name: "All",
    href: "",
  },
];

const PAGE_TITLE = "GP Details Info List";

// ----------------------------------------------------------------------

GPDetails.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GPDetails() {
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
      <GPDetailsList />
    </Page>
  );
}
