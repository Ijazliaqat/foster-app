import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import TrainingsList from "@root/sections/carer-info/training-profiles/trainings-list/TrainingsList";

const PAGE_TITLE = "Training Profile";

TrainingPRofileList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Carer Info",
          href: "/carer-info",
        },
        {
          name: "Trainings List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function TrainingPRofileList() {
  return (
    <Page title={PAGE_TITLE}>
      <TrainingsList />
    </Page>
  );
}
