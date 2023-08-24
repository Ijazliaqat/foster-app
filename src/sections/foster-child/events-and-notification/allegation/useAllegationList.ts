import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { allegationInfoTableColumnsFunction, ALLEGATIONLISTPAGELIMIT } from ".";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteAllegationInfoDataMutation,
  useGetAllAllegationListDataQuery,
} from "@root/services/foster-child/events-and-notification/allegation/allegationInfo";

export const useAllegationList = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const [deleteAllegationInfoDataTrigger, deleteAllegationInfoDataStatus] =
    useDeleteAllegationInfoDataMutation();

  const queryParams = {
    search: searchValue,
    offset: page,
    limit: ALLEGATIONLISTPAGELIMIT,
    ...(router?.query?.fosterChildId && {
      fosterChildId: router?.query?.fosterChildId,
    }),
  };
  const apiDataParameter = { queryParams };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllAllegationListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: deleteData,
    };
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteAllegationInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      setIsRecordSetForDelete(false);

      enqueueSnackbar(res?.message || `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };
  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };
  const allegationInfoTableColumns = allegationInfoTableColumnsFunction(
    router,
    prepareRecordForDelete,
    theme
  );

  return {
    allegationInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    ALLEGATIONLISTPAGELIMIT,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
  };
};
