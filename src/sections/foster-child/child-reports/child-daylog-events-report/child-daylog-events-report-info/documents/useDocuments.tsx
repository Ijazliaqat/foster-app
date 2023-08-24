import { useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteAllegationInfoDocumentDataByIdMutation,
  useGetAllegationInfoDocumentDataQuery,
  usePostAllegationInfoDocumentDataMutation,
} from "@root/services/foster-child/events-and-notification/allegation/documents";

export const useDocuments = () => {
  const { user }: any = useAuth();
  const router = useRouter();
  const ALLEGATIONDOCUMENTPAGELIMIT = 10;
  const [searchValue, setSearchValue] = useState(undefined);
  // ----------------------------------------------------------------------
  const [
    postAllegationInfoDocumentDataTrigger,
    postAllegationInfoDocumentDataStatus,
  ] = usePostAllegationInfoDocumentDataMutation();
  const [
    deleteAllegationInfoDocumentDataByIdTrigger,
    deleteAllegationInfoDocumentDataByIdStatus,
  ] = useDeleteAllegationInfoDocumentDataByIdMutation();

  const [page, setPage] = useState(0);
  const queryParams = {
    offset: page,
    limit: ALLEGATIONDOCUMENTPAGELIMIT,
    search: searchValue,
  };
  const pathParams = {
    id: router?.query?.id,
  };
  const apiDataParameter = { queryParams, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetAllegationInfoDocumentDataQuery(apiDataParameter, {
      skip: !!!router?.query?.id,
      refetchOnMountOrArgChange: true,
    });

  const submitAllegationInfoDocumentData = async (data: any) => {
    if (!!!router?.query?.id) {
      enqueueSnackbar("Please submit the form first", { variant: "error" });
      return;
    }
    const documentFormData = new FormData();
    documentFormData.append("fosterChildId", router?.query?.fosterChildId + "");
    documentFormData.append("formName", "ALLEGATION");
    documentFormData.append("recordId", router?.query?.id + "");
    documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("documentPassword", data.password);
    documentFormData.append("file", data.chosenFile);

    const pathParams = {
      id: router?.query?.id,
    };
    const apiDataParameter = {
      // queryParams,
      pathParams,
      body: documentFormData,
    };
    try {
      const res: any = await postAllegationInfoDocumentDataTrigger(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: data?.id,
    };
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteAllegationInfoDocumentDataByIdTrigger(
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
    submitAllegationInfoDocumentData,
    router,
    postAllegationInfoDocumentDataStatus,
    onDeleteConfirm,
    ALLEGATIONDOCUMENTPAGELIMIT,
  };
};
