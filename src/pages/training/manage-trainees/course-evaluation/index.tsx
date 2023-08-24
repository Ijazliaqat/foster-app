import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CourseEvaluation from "@root/sections/training/manage-trainees/course-evaluation-form/CourseEvaluation";

const PAGE_TILE = "Trainer Evaluation Form";

TrainerEvaluationForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "Manage Trainers",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TrainerEvaluationForm() {
  return (
    <Page title={PAGE_TILE}>
      <CourseEvaluation />
    </Page>
  );
}
