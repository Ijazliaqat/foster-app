import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import TrainingVerificationForm from "@root/sections/recruitment/assessment-stage-one/training-verification-form/TrainingVerificationForm";

const PAGE_TITLE = "Recruitment";

TraingVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Assessment stage 1",
          href: "/recruitment",
        },
        {
          name: "Training Profile",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function TraingVerification() {
  return (
    <Page title={PAGE_TITLE}>
      <TrainingVerificationForm />
    </Page>
  );
}
