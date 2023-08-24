import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useState } from "react";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import ViewChildExclusionInfo from "@root/sections/foster-child/education-records/child-exclusion-info/view-child-exclusion-info/ViewChildExclusionInfo";
import { useRouter } from "next/router";
import { useGetSingleChildExclusionInfoRecordQuery } from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import IsFetching from "@root/components/loaders/IsFetching";

const PAGE_TITLE = "Child Exclusion Info";

ViewChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Exclusion Info List",
          href: "/foster-child/education-records/child-exclusion-info",
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
  const id = Object.keys(router?.query)[0];

  const { data, isError, isSuccess, isLoading } =
    useGetSingleChildExclusionInfoRecordQuery(id);
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <ViewChildExclusionInfo
              initialValueProps={{
                actionTaken: data?.data?.actionTaken,
                classStudying: data?.data?.classStudying,
                dateExclusion: new Date(data?.data?.dateExclusion),
                dateReturn: new Date(data?.data?.dateReturn),
                outcome: data?.data?.outcome,
                type: data?.data?.type,
                exclusionDetails: data?.data?.exclusionDetails,
              }}
              isError={isError}
              isSuccess={isSuccess}
              id={id}
            />
          </>
        )}
        <UploadDocuments
          readOnly={true}
          tableData={[]}
          searchParam={() => {}}
          isLoading={false}
          isFetching={false}
          column={[
            "documentType",
            "documentType",
            "date",
            "uploadBy",
            "password",
          ]}
          isSuccess={false}
          modalData={(data: any) => console.log(data)}
        />
      </HorizaontalTabs>
    </Page>
  );
}
