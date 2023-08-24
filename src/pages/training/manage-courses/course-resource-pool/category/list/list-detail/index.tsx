import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CourseArchive from "@root/sections/training/manage-courses/course-resource-pool/course-list/CourseList";

const PAGE_TILE = "Child Protection and Safeguarding";

ArchiveCourse.getLayout = function getLayout(page: any) {
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

export default function ArchiveCourse() {
  return (
    <Page title={PAGE_TILE}>
      <CourseArchive  />
    </Page>
  );
}
