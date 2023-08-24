import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UnannouncedHomeVisitForm from "@root/sections/carer-info/personal-info/chronology-of-events/unannounced-visit/unannounced-home-form/UnannouncedHomeVisitForm";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { enqueueSnackbar } from "notistack";
import {
  usePostUnannouncedDocumentsMutation,
  useDeleteDocumentListMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/unannounced-visit-api/unannouncedVisitDocumentsApi";

UnannouncedVisit.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function UnannouncedVisit() {
  const [params, setParams] = useState("");
  const router: any = useRouter();
  const { action, id, fosterCarerId } = router.query;
  if (!action && !id) {
    router.push({
      pathname: "/carer-info/personal-info/carer-chronology-of-events",
      query: {
        fosterCarerId: fosterCarerId,
      },
    });
  }
  // BREADCRUMBS
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Unannounced Home Visit",
      href: {
        pathname: "/carer-info/personal-info/carer-chronology-of-events",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Unannounced Home Visit List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Unannounced Home Visit";
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useUploadDocumentListQuery({
    params: {
      recordId: id,
      params: params,
    },
  });
  //unannounced-visit Upload Modal API
  const [postDocuments] = usePostUnannouncedDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDocumentListMutation();
  const tableData: any = documentData?.data?.carer_chronology_document;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "UNANNOUNCED_HOME_VISIT");
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);
    formData.append("recordId", id);
    try {
      await postDocuments(formData).unwrap();
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  //Delete API
  const deleteDocument = async (id: any) => {
    deleteDocumentList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Unannounced Home Visit", "Upload Documents"]}
      >
        {/* Unannounced Home Visit Component */}
        <UnannouncedHomeVisitForm id={id} action={action} />
        {/* Upload Documents Components */}
        <UploadDocuments
          readOnly={action === "view" ? true : false}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isFetching}
          isError={hasDocumentError}
          isSuccess={isSuccess}
          column={[
            "documentName",
            "type",
            "documentDate",
            "uploadBy",
            "password",
          ]}
          searchParam={(searchedText: string) => setParams(searchedText)}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={metaData?.page ?? 0}
          totalPages={metaData?.pages ?? 1}
          onDelete={(data: any) => {
            deleteDocument(data.id);
          }}
          disabled={
            !!id && (action === "add" || action === "edit") ? false : true
          }
        />
      </HorizaontalTabs>
    </>
  );
}
