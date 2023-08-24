import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildDaylogEventsReportList from "@root/sections/foster-child/child-reports/child-daylog-events-report/ChildDaylogEventsReportList";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Child Reports",
    href: "",
  },
];

const PAGE_TITLE = "DAY LOG EVENTS REPORTS";

// ----------------------------------------------------------------------

AllegationPage.getLayout = function getLayout(page: any) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AllegationPage() {
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
      <ChildDaylogEventsReportList />
    </Page>
  );
}
