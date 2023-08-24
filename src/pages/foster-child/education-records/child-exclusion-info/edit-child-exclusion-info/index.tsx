import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import EditChildExclusionInfo from "@root/sections/foster-child/education-records/child-exclusion-info/edit-child-exclusion-info/EditChildExclusionInfo";
import {
  useDeleteDocumentExclusionInfoRecordMutation,
  useGetChildExclusionDocumentListQuery,
  useGetSingleChildExclusionInfoRecordQuery,
  usePostFosterExclusionDocumentMutation,
} from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import { useRouter } from "next/router";
import IsFetching from "@root/components/loaders/IsFetching";

const PAGE_TITLE = "Child Exclusion Info";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
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

export default function EditChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Exclusion info", "Upload Document"]);
  const router = useRouter();
  const id = Object.keys(router?.query)[0];
  const formData = new FormData();

  const { data, isError, isSuccess, isLoading } =
    useGetSingleChildExclusionInfoRecordQuery(id);
  const {
    data: exclusionDocumentList,
    isError: exclusionDocumentError,
    isSuccess: exclusionDocumentSuccess,
    isLoading: exclusionDocumentLoading,
    isFetching: exclusionDocumentFetching,
  } = useGetChildExclusionDocumentListQuery(id);
  const [postExclusionDocumentData] = usePostFosterExclusionDocumentMutation();
  const [deleteDocument] = useDeleteDocumentExclusionInfoRecordMutation();

  console.log(exclusionDocumentList);

  const postExclusionDocument = async (exclusionData: any) => {
    formData.append("type", exclusionData.documentType);
    formData.append("documentDate", exclusionData.documentDate);
    formData.append("password", exclusionData.password);
    formData.append("file", exclusionData.chosenFile);
    formData.append("exclusionId", id);
    const res = await postExclusionDocumentData(formData);
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <EditChildExclusionInfo
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
          readOnly={false}
          tableData={exclusionDocumentList?.data?.exclusion_documents}
          searchParam={() => {}}
          isLoading={exclusionDocumentLoading}
          isFetching={exclusionDocumentFetching}
          column={["documentName", "type", "date", "uploadBy", "password"]}
          isSuccess={exclusionDocumentSuccess}
          onDelete={async (data: any) => {
            await deleteDocument(data?.id);
          }}
          modalData={(data: any) => postExclusionDocument(data)}
        />
      </HorizaontalTabs>
    </Page>
  );
}
