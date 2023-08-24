import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { OutSchoolActivityList } from "@root/sections/foster-child/education-records/out-of-school-activity/out-of-school-activity-info-list/OutSchoolActivity";

const PAGE_TITLE = "Out of School Activity";

OutOfSchoolActivity.getLayout = function getLayout(page: any) {
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
          name: "Out of School Activity Info List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function OutOfSchoolActivity() {
  return (
    <Page title={PAGE_TITLE}>
      <OutSchoolActivityList />
    </Page>
  );
}
