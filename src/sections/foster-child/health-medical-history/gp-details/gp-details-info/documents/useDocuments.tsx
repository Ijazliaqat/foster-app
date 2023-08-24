import { useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteGpDetailsInfoDocumentDataByIdMutation,
  useGetGpDetailsInfoDocumentDataQuery,
  usePostGpDetailsInfoDocumentDataMutation,
} from "@root/services/foster-child/health-medical-history/gp-details/documents";

export const useDocuments = () => {
  const { user }: any = useAuth();
  const router = useRouter();
  const GPDETAILSDOCUMENTPAGELIMIT = 10;
  const [searchValue, setSearchValue] = useState(undefined);
  // ----------------------------------------------------------------------
  const [
    postGpDetailsInfoDocumentDataTrigger,
    postGpDetailsInfoDocumentDataStatus,
  ] = usePostGpDetailsInfoDocumentDataMutation();
  const [
    deleteGpDetailsInfoDocumentDataByIdTrigger,
    deleteGpDetailsInfoDocumentDataByIdStatus,
  ] = useDeleteGpDetailsInfoDocumentDataByIdMutation();

  const [page, setPage] = useState(0);
  const queryParams = {
    offset: page,
    limit: GPDETAILSDOCUMENTPAGELIMIT,
    search: searchValue,
  };
  const pathParams = {
    gpInfoId: router?.query?.gpInfoId,
  };
  const apiDataParameter = { queryParams, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetGpDetailsInfoDocumentDataQuery(apiDataParameter, {
      skip: !!!router?.query?.gpInfoId,
      refetchOnMountOrArgChange: true,
    });

  const submitGpDetailsInfoDocumentData = async (data: any) => {
    if (!!!router?.query?.gpInfoId) {
      enqueueSnackbar("Please submit the form first", { variant: "error" });
      return;
    }
    const documentFormData = new FormData();

    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("file", data.chosenFile);

    const pathParams = {
      gpInfoId: router?.query?.gpInfoId,
    };
    const apiDataParameter = { queryParams, pathParams, body: documentFormData };
    try {
      const res: any = await postGpDetailsInfoDocumentDataTrigger(
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
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteGpDetailsInfoDocumentDataByIdTrigger(
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
    submitGpDetailsInfoDocumentData,
    router,
    postGpDetailsInfoDocumentDataStatus,
    onDeleteConfirm,
    GPDETAILSDOCUMENTPAGELIMIT,
  };
};
