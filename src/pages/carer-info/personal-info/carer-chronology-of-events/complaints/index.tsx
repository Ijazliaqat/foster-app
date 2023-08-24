import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import ComplaintsForm from "@root/sections/carer-info/personal-info/chronology-of-events/complaints/complaints-forms/ComplaintForms";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteComplaintDocumentListMutation,
  usePostComplaintDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/uploadDocumentsApi";
import { enqueueSnackbar } from "notistack";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

Complaints.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function Complaints() {
  const [params, setParams] = useState("");
  // -------
  const Router: any = useRouter();
  const { action, id, fosterCarerId } = Router.query;
  if (!action && !id) {
    Router.push({
      pathname: "/carer-info/personal-info/carer-chronology-of-events",
      query: { fosterCarerId: fosterCarerId },
    });
  }

  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Complaints list",
      href: {
        pathname: "/carer-info/personal-info/carer-chronology-of-events",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Complaints",
      href: "",
    },
  ];

  const PAGE_TITLE = "Complaints";
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useUploadDocumentListQuery({
    params: {
      complaintId: id,
      params: params,
    },
  });

  //Car Insurance Upload Modal API
  const [postDocuments] = usePostComplaintDocumentsMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteComplaintDocumentListMutation();

  const tableData: any = documentData?.data?.complaint_documents;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.chosenFile);
    formData.append("complaintId", id);
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

  //Delete API Handles Here
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
      <HorizaontalTabs tabsDataArray={["Complaints", "Uploaded Documents"]}>
        <ComplaintsForm action={action} id={id} />
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
