import {
  useDeleteInitialHomeDocumentDataByIdMutation,
  useGetInitialHomeDocumentDataQuery,
  usePostInitialHomeDocumentDataMutation,
} from "@root/services/carer-info/personal-info/initial-home-visit/documents/documents";
import { useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useDocument = () => {
  const { user }: any = useAuth();
  const { query } = useRouter();

  const [
    postInitialHomeDocumentDataTrigger,
    postInitialHomeDocumentDataStatus,
  ] = usePostInitialHomeDocumentDataMutation();

  const [
    deleteInitialHomeDocumentDataByIdTrigger,
    deleteInitialHomeDocumentDataByIdStatus,
  ] = useDeleteInitialHomeDocumentDataByIdMutation();

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
    fosterCarerId: query?.fosterCarerId,
  };

  const dataParameter = { params };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetInitialHomeDocumentDataQuery(dataParameter);

  const submitInitialHomeVisitDocument = async (data: any) => {
    const documentFormData = new FormData();

    documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("documentFile", data.chosenFile);
    const putParams = {
      fosterCarerId:
        query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: documentFormData };
    try {
      const res: any = await postInitialHomeDocumentDataTrigger(
        putDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const onDeleteConfirm = async (data: any) => {
    const params = {
      id: data?.id,
    };
    const apiParameter = { params };
    try {
      const res: any = await deleteInitialHomeDocumentDataByIdTrigger(
        apiParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
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
    submitInitialHomeVisitDocument,
    onDeleteConfirm,
  };
};
