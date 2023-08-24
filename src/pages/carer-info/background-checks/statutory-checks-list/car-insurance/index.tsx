import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import CarInsuranceForm from "@root/sections/carer-info/background-checks/statutory-checks-list/car-insurance/CarInsuranceForm";
import { useRouter } from "next/router";

import {
  useDeleteStatutoryUploadDocumentsMutation,
  usePostStatutoryUploadDocumentsMutation,
  useStatutoryUploadDocumentListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/common-upload-documents/uploadDocumentsApi";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { enqueueSnackbar } from "notistack";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

CarInsurance.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function CarInsurance() {
  const [params, setParams] = useState("");
  const [page, setPage] = useState(0);
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
      name: "Car Insurance",
      href: "",
    },
  ];

  const PAGE_TITLE = "Statutory Check List";

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useStatutoryUploadDocumentListQuery({
    params: {
      recordId: id,
      search: params,
      limit: 10,
      offset: page,
    },
  });

  //Car Insurance Upload Modal API
  const [postDocuments] = usePostStatutoryUploadDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteStatutoryUploadDocumentsMutation();

  const tableData: any = documentData?.data?.statutoryCheckList;
  const metaData: any = documentData?.data?.meta;

  //Handling POST API
  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "CAR_INSURANCE");
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
      <HorizaontalTabs tabsDataArray={["Car Insurance", "Upload Documents"]}>
        <CarInsuranceForm action={action} id={id} />
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
          searchParam={(searchedText: any) => setParams(searchedText)}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={(page: any) => setPage((page - 1) * 10)}
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
