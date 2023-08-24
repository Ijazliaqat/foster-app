import { useState } from "react";
import { useRouter } from "next/router";
import { gpDetailsInfoTableColumnsFunction, GPDETAILSLISTPAGELIMIT } from ".";
import {
  useGetAllGpDetailsListDataQuery,
  useDeleteGpDetailsInfoDataMutation,
} from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsInfo";
import { enqueueSnackbar } from "notistack";

export const useGPDetailsList = () => {
  const router = useRouter();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const [deleteGpDetailsInfoDataTrigger, deleteGpDetailsInfoDataStatus] =
    useDeleteGpDetailsInfoDataMutation();

  const queryParams = {
    search: searchValue,
    offset: page,
    limit: GPDETAILSLISTPAGELIMIT,
    ...(router?.query?.fosterChildId && {
      fosterChildId: router?.query?.fosterChildId,
    }),
  };
  console.log(queryParams);
  const apiDataParameter = { queryParams };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllGpDetailsListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: deleteData,
    };
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteGpDetailsInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      setIsRecordSetForDelete(false);

      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };
  const gpDetailsInfoTableColumns = gpDetailsInfoTableColumnsFunction(
    router,
    prepareRecordForDelete
  );

  return {
    gpDetailsInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    GPDETAILSLISTPAGELIMIT,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
  };
};
