import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import DiaryRecordings from "@root/sections/reports/carer-report/diary-recordings-carer/DiaryRecordings";

const PAGE_TITLE = "Diary Recordings By Carer Reports";

DiaryRecordingsLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Carer Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function DiaryRecordingsLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <DiaryRecordings />
    </Page>
  );
}
