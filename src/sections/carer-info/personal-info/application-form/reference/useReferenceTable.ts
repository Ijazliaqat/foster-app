import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteReferenceDetailMutation,
  useGetReferenceDetailsQuery,
} from "@root/services/carer-info/personal-info/application-form/ReferenceApi";

export const useReferenceTable = (applicationFormid: any) => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReferenceDetailsQuery({ id: applicationFormid, params });
  const meta = data?.data?.meta;
  const theme: any = useTheme();
  const [deleteReferenceDetail] = useDeleteReferenceDetailMutation();

  const listDeleteHandler = (id: any) => {
    deleteReferenceDetail({ id })
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
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    router,
    theme,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    meta,
    listDeleteHandler,
  };
};
