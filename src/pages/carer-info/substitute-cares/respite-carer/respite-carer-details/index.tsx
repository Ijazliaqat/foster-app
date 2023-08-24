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
import usePath from "@root/hooks/usePath";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Respite Carer";

export const TABSDATA = ["Respite Carer", "Upload Documents"];

RespiteCarerDetails.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function RespiteCarerDetails() {
  const formData = new FormData();

  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      name: "",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Carer Info",
      href: makePath({
        path: "/carer-info/substitute-cares/respite-carer",
      }),
    },
    {
      name: "Respite Carer",
      href: "/carer-info/substitute-cares/respite-carer/respite-carer-details",
    },
  ];

  const router = useRouter();
  const id = router?.query?.fosterCarerId;
  const recordId = router?.query?.carerId;

  const [postSwapCarerData, status] = usePostSubstituteCarerMutation();
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

  // const formSubmitHandler = (formData: any) => {
  // const body = { ...formData, carerType: "RC", status: " " };
  //   console.log(body);

  //   postSwapCarerData(body);
  // };
  const formSubmitHandler = async (formData: any) => {
    const body = { ...formData, carerType: "RC", status: " " };
    try {
      const res: any = await postSwapCarerData(body).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/substitute-cares/respite-carer?fosterCarerId=${id}`
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
        `/carer-info/substitute-cares/respite-carer?fosterCarerId=${id}`
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
    formData.append("carerType", "RC");
    postDocuments({ body: formData, recordId });
  };
  const deleteDocumentHandler = (documentRow: any) => {
    deleteDocuments(documentRow?.id);
  };
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizontalTabs tabsDataArray={TABSDATA}>
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
