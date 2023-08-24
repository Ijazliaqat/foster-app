import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ChildMedicationInfoForm from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { enqueueSnackbar } from "notistack";
import {
  useCreateChildMedicationInfoDocumentMutation,
  useDeleteChildMedicationInfoDocumentMutation,
  useGetChildMedicationInfoDocumentQuery,
} from "@root/services/foster-child/health-medical-history/child-medication-info/ChildMedicationInfoDocument";
import useAuth from "@root/hooks/useAuth";
import dayjs from "dayjs";

ChildMedicationInfoActions.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChildMedicationInfoActions() {
  const Router: any = useRouter();
  const { action, fosterChildId, ChildMedicationInfoId } = Router?.query;
  const PAGE_TITLE = "Child Medication Info";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "child Medication Info",
      href: {
        pathname: "/foster-child/health-medical-history/child-medication-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Medication Info",
      href: "",
    },
  ];

  const [params, setParams] = useState("");
  const {
    data,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
    setPage,
  }: any = useGetChildMedicationInfoDocumentQuery({
    ChildMedicationInfoId,
    params,
  });
  //child medication Upload Modal API
  const [postDocuments] = useCreateChildMedicationInfoDocumentMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteChildMedicationInfoDocumentMutation();

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("docName", data.docName);
    formData.append("docType", data.documentType);
    formData.append("date", dayjs(data.documentDate).format("DD/MM/YYYY"));
    formData.append("uploadedBy", data.uploadedBy);
    formData.append("password", data.password);
    formData.append("docFile", data.chosenFile);
    if (ChildMedicationInfoId) {
      try {
        const res: any = await postDocuments({
          params: {
            childMedicationInfoId: ChildMedicationInfoId,
          },
          body: formData,
        });
        enqueueSnackbar(res?.message ?? "Details Submitted Successfully", {
          variant: "success",
        });
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    } else {
      enqueueSnackbar("fill Child Medication form first", { variant: "error" });
    }
  };

  const deleteDocument = (id: any) => {
    deleteDocumentList({
      params: {
        childMedicationInfoDocId: id,
      },
    })
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
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Medication Info", "Uploaded Documents"]}
      >
        <ChildMedicationInfoForm
          action={action}
          fosterChildId={fosterChildId}
          ChildMedicationInfoId={ChildMedicationInfoId}
        />
        <UploadDocuments
          readOnly={action === "view" ? true : false}
          tableData={data?.data?.child_medication_document}
          isLoading={isDocumentLoading}
          isFetching={isFetching}
          isError={hasDocumentError}
          isSuccess={isSuccess}
          column={[
            "docName",
            "docType",
            "documentDate",
            "uploadedBy",
            "password",
          ]}
          searchParam={(searchedText: string) => setParams(searchedText)}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={(page: any) => {
            setPage((page - 1) * 10);
          }}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onDelete={(data: any) => deleteDocument(data?.id)}
        />
      </HorizaontalTabs>
    </Box>
  );
}
