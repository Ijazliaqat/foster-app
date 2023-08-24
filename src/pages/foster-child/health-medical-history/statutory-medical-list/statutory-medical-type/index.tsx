import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import StatutoryMedicalTypeInfoTabs from "@root/sections/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type/statutory-medical-type-info/statutory-medical-type-info-tabs/StatutoryMedicalTypeInfoTabs";
import { useRouter } from "next/router";
import { headerHeading } from "@root/sections/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Statutory Medical List",
    href: !!query?.fosterChildId
      ? `/foster-child/health-medical-history/statutory-medical-list?fosterChildId=${query?.fosterChildId}`
      : "/foster-child/health-medical-history/statutory-medical-list",
  },
  {
    name: headerHeading?.[query?.type],
    href: "#",
  },
];

const PAGE_TITLE = "Statutory Medical List";

// ----------------------------------------------------------------------

StatutoryMedicalType.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function StatutoryMedicalType() {
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
        breadcrumbs={BREADCRUMBS(router.query)}
      />
      <StatutoryMedicalTypeInfoTabs />
    </Page>
  );
}
