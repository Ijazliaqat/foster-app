import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteAddressHistoryMutation,
  useGetAllHistoryQuery,
} from "@root/services/carer-info/personal-info/carer-address-history/CarerAddressHistoryApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useRef } from "react";

export const useCarerAddressTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllHistoryQuery({ params });
  const addressHistoryList = data?.data?.carer_address_history;
  const meta = data?.data?.meta;
  const [deleteAddressHistory, { isLoading: isLoadingDelete }] =
    useDeleteAddressHistoryMutation();

  const listDeleteHandler = (id: any) => {
    deleteAddressHistory(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Record Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return {
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    addressHistoryList,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
    router,
    listDeleteHandler,
  };
};
