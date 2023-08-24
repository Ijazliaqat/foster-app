import { useRouter } from "next/router";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import SatsExamGradeList from "@root/sections/foster-child/education-records/sats-exam-grade/SatsExamGradeList";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "/ Child Info",
    href: `/foster-child/?fosterChildId=${query.fosterChildId}`,
  },
  {
    name: "SATS/Exam/Grade Details List",
    href: "/",
  },
];

const PAGE_TITLE = "SATS/Exam/Grade Details";

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
      <SatsExamGradeList />
    </Page>
  );
}
