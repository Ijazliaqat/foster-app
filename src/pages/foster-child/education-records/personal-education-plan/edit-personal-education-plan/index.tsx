import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import EditPersonalEducationPlan from "@root/sections/foster-child/education-records/personal-education-plan/edit-personal-educational-plan/EditPersonalEducationPlan";
import {
  useDeleteDocumentChildEducationPlanMutation,
  useGetDocumentChildEducationPlanQuery,
  useGetSingleChildEducationPlanQuery,
  usePostDocumentChildEducationPlanMutation,
} from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";
import { useRouter } from "next/router";
import IsFetching from "@root/components/loaders/IsFetching";
import { useTableParams } from "@root/hooks/useTableParams";

const PAGE_TITLE = "Personal Education Plan";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "/child-info",
        },
        {
          name: "Personal Education Plan",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EditChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["PEP info", "Upload Document"]);
  const router = useRouter();
  const fosterChildId = Object.keys(router?.query)[0];
  const formData = new FormData();
  const { data, isLoading } =
    useGetSingleChildEducationPlanQuery(fosterChildId);
  const [postDocument] = usePostDocumentChildEducationPlanMutation();

  const [deleteDocument] = useDeleteDocumentChildEducationPlanMutation();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
    
  const {
    data: documentData,
    isLoading: documentLoading,
    isFetching: documentFetching,
    isSuccess: documentSuccess,
  } = useGetDocumentChildEducationPlanQuery({ fosterChildId, params });

  const postDocumentData = async (data: any) => {
    formData.append("type", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.chosenFile);

    console.log(documentData);

    const res = await postDocument({ formData, fosterChildId });
  };

  const deleteDocumentData = async (data: any) => {
    const res = await deleteDocument(data?.id);
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <EditPersonalEducationPlan
              initialValueProps={{
                school: data?.school,
                date: new Date(data?.date),
                onFile: data?.onFile,
                comments: data?.comments,
                principalName: data?.principalName,
              }}
              fosterChildId={fosterChildId}
            />
          </>
        )}
        {documentLoading ? (
          <IsFetching isFetching={documentLoading} />
        ) : (
          <>
            <UploadDocuments
              readOnly={false}
              searchKey="search"
              tableData={documentData?.data?.educationPlanDocuments}
              searchParam={() => {}}
              isLoading={documentLoading}
              isFetching={documentFetching}
              onDelete={async (data: any) => deleteDocumentData(data)}
              column={[
                "documentName",
                "type",
                "documentDate",
                "uploadBy",
                "password",
              ]}
              isSuccess={documentSuccess}
              onPageChange={pageChangeHandler}
              onSortByChange={sortChangeHandler}
              modalData={(data: any) => postDocumentData(data)}
              totalPages={documentData?.data?.meta?.pages}
              currentPage={documentData?.data?.meta?.page}
            />
          </>
        )}
      </HorizaontalTabs>
    </Page>
  );
}
