import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import DiaryRecordingsForm from "@root/sections/reports/carer-report/diary-recordings-carer/diary-recordings-form/DiaryRecordingsForm";

const PAGE_TITLE = "View Diary Recordings By Carer Reports";

DiaryRecordingsFormLayout.getLayout = function getLayout(page: any) {
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
          name: "Diary Recordings By Reports List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function DiaryRecordingsFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <DiaryRecordingsForm action={action} id={id} />
    </Page>
  );
}
