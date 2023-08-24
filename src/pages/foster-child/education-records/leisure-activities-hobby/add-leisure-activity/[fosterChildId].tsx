import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import UploadedDocumentsTable from "@root/sections/foster-child/education-records/leisure-activites-hobby/upload-documents/UploadDocumentsTable";
import LeisureActivitiesForm from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table/LeisureActivitiesForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants

const PAGE_TITLE = "Leisure Activities";

AddLeisureActivity.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AddLeisureActivity() {
  const router: any = useRouter();
  let { fosterChildId } = router.query;
  let [leisureActivityId, setLeisureActivityId] = useState(null);
  let BREADCRUMBS = [
    {
      id: 1,
      icon: <HomeIcon />,
      href: "/",
    },
    {
      id: 2,
      name: "Leisure Activities List",
      href: `/foster-child/education-records/leisure-activities-hobby?fosterChildId=${fosterChildId}`,
    },
    {
      id: 3,
      name: "Leisure Activity",
      href: "",
    },
  ];
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <HorizaontalTabs
        tabsDataArray={["Leisure Activities", "Upload document"]}
      >
        <LeisureActivitiesForm
          setLeisureActivityId={setLeisureActivityId}
          id={fosterChildId}
          action="add"
        />
        <UploadedDocumentsTable
          action="add"
          leisureActivityId={leisureActivityId}
        />
      </HorizaontalTabs>
    </>
  );
}
