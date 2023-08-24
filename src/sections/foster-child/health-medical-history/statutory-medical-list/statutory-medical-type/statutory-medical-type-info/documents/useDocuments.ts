import { useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteStatutoryMedicalListInfoDocumentDataByIdMutation,
  useGetStatutoryMedicalListInfoDocumentDataQuery,
  usePostStatutoryMedicalListInfoDocumentDataMutation,
} from "@root/services/foster-child/health-medical-history/statutory-medical-list/documents";

export const useDocuments = () => {
  const { user }: any = useAuth();
  const router = useRouter();
  const STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT = 10;
  // ----------------------------------------------------------------------
  const [
    postStatutoryMedicalListInfoDocumentDataTrigger,
    postStatutoryMedicalListInfoDocumentDataStatus,
  ] = usePostStatutoryMedicalListInfoDocumentDataMutation();
  const [
    deleteStatutoryMedicalListInfoDocumentDataByIdTrigger,
    deleteStatutoryMedicalListInfoDocumentDataByIdStatus,
  ] = useDeleteStatutoryMedicalListInfoDocumentDataByIdMutation();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const queryParams = {
    offset: page,
    limit: STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT,
    search: searchValue,
  };
  const pathParams = {
    id: router.query?.id,
  };
  const dataParameter = { queryParams, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetStatutoryMedicalListInfoDocumentDataQuery(dataParameter, {
      skip: !!!router.query?.id,
      refetchOnMountOrArgChange: true,
    });

  const submitStatutoryMedicalListInfoDocumentData = async (data: any) => {
    if (!!!router?.query?.id) {
      enqueueSnackbar("Please submit the form first", { variant: "error" });
      return;
    }
    const documentFormData = new FormData();

    // documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("file", data.chosenFile);

    const pathParams = {
      id: router.query?.id,
    };
    const apiDataParameter = {
      pathParams,
      body: documentFormData,
    };
    try {
      const res: any = await postStatutoryMedicalListInfoDocumentDataTrigger(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: data?.id,
    };
    console.log(pathParams);
    const apiDataParameter = { pathParams };
    try {
      const res: any =
        await deleteStatutoryMedicalListInfoDocumentDataByIdTrigger(
          apiDataParameter
        ).unwrap();
      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    user,
    isFetching,
    router,
    submitStatutoryMedicalListInfoDocumentData,
    onDeleteConfirm,
    STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT,
  };
};
