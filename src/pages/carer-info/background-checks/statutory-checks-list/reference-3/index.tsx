import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ReferenceThreeForm from "@root/sections/carer-info/background-checks/statutory-checks-list/reference-3/ReferenceThreeForm";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteStatutoryUploadDocumentsMutation,
  usePostStatutoryUploadDocumentsMutation,
  useStatutoryUploadDocumentListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/common-upload-documents/uploadDocumentsApi";
import { enqueueSnackbar } from "notistack";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

Reference3.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function Reference3() {
  const [params, setParams] = useState("");
  const router: any = useRouter();
  const { action, id, fosterCarerId } = router.query;
  if (!action && !id) {
    router.push({
      pathname: "/carer-info/background-checks/statutory-checks-list",
      query: { fosterCarerId: fosterCarerId },
    });
  }
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Statutory Check List",
      href: {
        pathname: "/carer-info/background-checks/statutory-checks-list",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "References 3",
      href: "",
    },
  ];
  const PAGE_TITLE = "References 3";

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useStatutoryUploadDocumentListQuery({
    params: {
      recordId: id,
      params: params,
    },
  });

  //API For Post Documents
  const [postDocuments]: any = usePostStatutoryUploadDocumentsMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteStatutoryUploadDocumentsMutation();

  const tableData: any = documentData?.data?.statutoryCheckList;
  const metaData: any = documentData?.data?.meta;

  //Handling POST API
  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "REFERENCE_3");
    formData.append("recordId", id);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);
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
      <HorizaontalTabs tabsDataArray={["References 3", "Upload Documents"]}>
        <ReferenceThreeForm action={action} id={id} />
        <UploadDocuments
          readOnly={action === "view" ? true : false}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isFetching}
          isError={hasDocumentError}
          isSuccess={isSuccess}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          searchParam={(searchedText: string) => setParams(searchedText)}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
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
