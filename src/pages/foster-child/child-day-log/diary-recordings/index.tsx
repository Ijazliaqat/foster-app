import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DiaryRecordingsTable from "@root/sections/foster-child/child-day-log/diary-recordings/DiaryRecordingsTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

DiaryRecordings.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function DiaryRecordings() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Diary Recordings List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Diary Recordings";
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {/* Diary Recording Table Component */}
      <DiaryRecordingsTable />
    </>
  );
}
