import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import CourseArchive from "@root/sections/training/manage-courses/course-resource-pool/course-list/CourseList";


const PAGE_TILE = "Child Protection and Safeguarding";

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
      <CourseArchive />
    </Page>
  );
}
