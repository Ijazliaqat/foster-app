import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import ChildTherapyInfo from "@root/sections/foster-child/health-medical-history/therapy-info/child-therapy-info/ChildTherapyInfo";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import SatsExamGradeDetails from "@root/sections/foster-child/education-records/sats-exam-grade/details/SatsExamGradeDetails";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "/ SATS/Exam/Grade Details List",
    href: `/foster-child/education-records/sats-exam-grade-details-list?fosterChildId=${query.fosterChildId}`,
  },
  {
    name: "SATS/Exam/Grade Details ",
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
      <SatsExamGradeDetails />
    </Page>
  );
}
