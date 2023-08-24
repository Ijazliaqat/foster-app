import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import LivingTogether from "@root/sections/matching-and-placement/placement/placement-plan/placement-plan-details/fostering-placement/living-together/LivingTogether";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "IFA",
    href: "#",
  },
  {
    name:'Placement'
  }
];

const PAGE_TITLE = "Placement Plan";

PlacementPlan.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function PlacementPlan() {
  return (
    <Page title={PAGE_TITLE}>
      <LivingTogether/>
    </Page>
  );
}
