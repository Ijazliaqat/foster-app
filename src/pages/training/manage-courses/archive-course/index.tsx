import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import CourseListMain from "@root/sections/training/manage-courses/course-resource-pool/course-list-card/CourseListMain";

const PAGE_TILE = "Course List";

CourseList.getLayout = function getLayout(page: any) {
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
          name: "Course Sub Categories",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function CourseList() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <CourseListMain name='archiveCourse' />
    </Page>
  );
}
