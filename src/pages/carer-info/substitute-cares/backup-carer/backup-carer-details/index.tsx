import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteSubstituteCarerDocMutation,
  useEditSubstituteCarerMutation,
  useGetSubstituteCarerDocsQuery,
  usePostSubstituteCarerDocsMutation,
  usePostSubstituteCarerMutation,
} from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Backup Carer";

export const TABSDATA = ["Backup Carer", "Upload Documents"];

BackupCarerDetails.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BackupCarerDetails() {
  const formData = new FormData();

  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;
  const recordId = router?.query?.carerId;

  const BREADCRUMBS = [
    {
      name: "",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Carer Info",
      href: makePath({
        path: "/carer-info/substitute-cares/backup-carer",
      }),
    },
    {
      name: "Backup Carer",
      href: "/carer-info/substitute-cares/backup-carer/backup-carer-details",
    },
  ];
  const [postBackupCarerData, status] = usePostSubstituteCarerMutation();
  const [editCarerData, editingStatus] = useEditSubstituteCarerMutation();
  const [postDocuments] = usePostSubstituteCarerDocsMutation();
  const [deleteDocuments] = useDeleteSubstituteCarerDocMutation();
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isSuccess: isDocumentSuccess,
    isError: hasDocumentError,
    isFetching: isDocumentFetching,
  } = useGetSubstituteCarerDocsQuery(recordId);
  const formSubmitHandler = async (formData: any) => {
    const body = { ...formData, carerType: "BC", status: " " };
    try {
      const res: any = await postBackupCarerData(body).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/substitute-cares/backup-carer?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  const formEditHandler = async (body: any) => {
    // const body = { ...formData, carerType: "BC", status: " " };
    try {
      const res: any = await editCarerData(body).unwrap();
      enqueueSnackbar(res?.message ?? `Details Edited Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/substitute-cares/backup-carer?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  //--------------------//
  const documentUploadHandler = (data: any) => {
    formData.append("documentType", data.documentType);
    formData.append("documentName", "name");
    formData.append("personName", "Backup Carer");
    formData.append(
      "documentDate",
      dayjs(data.documentDate).format("DD/MM/YYYY")
    );
    formData.append("password", data.password);
    formData.append("chooseFiles", data.chosenFile);
    formData.append("carerType", "BC");
    postDocuments({ body: formData, recordId });
  };
  const deleteDocumentHandler = (documentRow: any) => {
    deleteDocuments(documentRow?.id);
  };
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks sx={{ mb: 2 }} breadcrumbs={BREADCRUMBS} />
      <HorizontalTabs tabsDataArray={recordId ? TABSDATA : ["Backup Carer"]}>
        <SubstituteCarerForm
          onSubmit={formSubmitHandler}
          status={status}
          onEdit={formEditHandler}
        />
        {recordId && (
          <UploadDocuments
            searchParam={(searchedText: string) =>
              console.log("searched Value", searchedText)
            }
            tableData={documentData?.data?.backup_carer_details}
            isLoading={isDocumentLoading}
            isFetching={isDocumentFetching}
            isError={hasDocumentError}
            isSuccess={isDocumentSuccess}
            column={[
              "documentName",
              "documentType",
              "documentDate",
              "personName",
              "password",
            ]}
            modalData={documentUploadHandler}
            onDelete={deleteDocumentHandler}
            onPageChange={(page: any) => console.log("parent log", page)}
            currentPage={documentData?.data?.meta?.page}
            totalPages={documentData?.data?.meta?.pages}
          />
        )}
      </HorizontalTabs>
    </Page>
  );
}
