import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { PersonalEducationPlanList } from "@root/sections/foster-child/education-records/personal-education-plan/personal-educational-plan-list/PersonalEducationPlanList";

const PAGE_TITLE = "Personal Education Plan";

PersonalEducationPlan.getLayout = function getLayout(page: any) {
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
          name: "Personal Education Plan List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function PersonalEducationPlan() {
  return (
    <Page title={PAGE_TITLE}>
      <PersonalEducationPlanList />
    </Page>
  );
}
