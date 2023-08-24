import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CourseResourceCard from "@root/sections/training/manage-courses/course-resource-pool/course-resource-card/CourseResourceCard";
const PAGE_TILE = "Course Categories";

CoursePoolList.getLayout = function getLayout(page: any) {
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
          name: "Course Categories",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function CoursePoolList() {
  return (
    <Page title={PAGE_TILE}>
      <CourseResourceCard />
    </Page>
  );
}
