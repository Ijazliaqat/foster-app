import { useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteSanctionDocumentDataByIdMutation,
  useGetSanctionDetailsDocumentDataQuery,
  usePostSanctionDetailsDocumentDataMutation,
} from "@root/services/foster-child/other-information/saction-details/documents";

export const useSanctionDocument = () => {
  const { user }: any = useAuth();
  const { query }: any = useRouter();

  const [postSanctionDetailsDocumentDataTrigger] =
    usePostSanctionDetailsDocumentDataMutation();

  const [deleteSanctionDocumentDataByIdTrigger] =
    useDeleteSanctionDocumentDataByIdMutation();

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };
  const pathParams = {
    sanctionDetailsId: query?.sanctionDetailsId,
  };
  const dataParameter = { params, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetSanctionDetailsDocumentDataQuery(dataParameter, {
      skip: !!!query?.sanctionDetailsId,
      refetchOnMountOrArgChange: true,
    });

  const submitSanctionDocument = async (data: any) => {
    if (!!!query?.sanctionDetailsId) {
      enqueueSnackbar("Please submit the Sanction Details form first", {
        variant: "error",
      });
      return;
    }

    const documentFormData = new FormData();

    documentFormData.append("docType", data.documentType);
    documentFormData.append("date", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("docFile", data.chosenFile);
    documentFormData.append("sanctionDetailsId", query?.sanctionDetailsId);

    const putDataParameter = {
      body: documentFormData,
      pathParams,
    };
    try {
      const res: any = await postSanctionDetailsDocumentDataTrigger(
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
    console.log(data);
    
    const pathParams = {
      id: data?.id,
    };
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteSanctionDocumentDataByIdTrigger(
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
    submitSanctionDocument,
    query,
    onDeleteConfirm,
  };
};
