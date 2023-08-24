import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useState } from "react";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import ViewOutSchoolActivityInfo from "@root/sections/foster-child/education-records/out-of-school-activity/view-out-of-school-activity-info/ViewOutSchoolActivityInfo";
import { useRouter } from "next/router";
import {
  useGetSchoolActivityDocumentDataQuery,
  useGetSingleSchoolActivityDataQuery,
} from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";
import { useTableParams } from "@root/hooks/useTableParams";

const PAGE_TITLE = "Child Exclusion Info";

ViewChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Exclusion Info List",
          href: "/child-info",
        },
        {
          name: "Child Exclusion Info",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Exclusion info", "Upload Document"]);
  const router = useRouter();
  const fosterChildId: any = router?.query?.fosterChildId;
  const recordID: any = router?.query?.recordId;
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetSingleSchoolActivityDataQuery(recordID);

  const { params, pageChangeHandler } = useTableParams();

  const {
    data: documentData,
    idFetching: documentFetching,
    isLoading: documentLoading,
    isSuccess: documentSuccess,
  } = useGetSchoolActivityDocumentDataQuery({ fosterChildId, recordID });

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <ViewOutSchoolActivityInfo
          initialValueProps={{
            activityType: data?.data?.activityType,
            comments: data?.data?.comments,
            fromDate: new Date(data?.data?.fromDate),
            outOfDate: new Date(data?.data?.outOfDate),
          }}
        />
        <UploadDocuments
          readOnly={true}
          tableData={documentData?.data?.documents}
          searchParam={() => {}}
          onPageChange={pageChangeHandler}
          isLoading={documentLoading}
          isFetching={documentFetching}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          isPagination={true}
          isSuccess={documentSuccess}
          modalData={(data: any) => {}}
          totalPages={documentData?.data?.meta?.pages}
          currentPage={documentData?.data?.meta?.page}
        />
      </HorizaontalTabs>
    </Page>
  );
}
