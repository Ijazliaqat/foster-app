import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import {
  useDeleteFamilyDetailMutation,
  useGetFamilyDetailsQuery,
} from "@root/services/carer-info/personal-info/application-form/FamilyApi";
import { enqueueSnackbar } from "notistack";

export const useFamilyTable = (applicationFormid: any) => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetFamilyDetailsQuery({ params, id: applicationFormid });
  const meta = data?.data?.meta;
  const theme: any = useTheme();
  const [deleteFamilyDetail] = useDeleteFamilyDetailMutation();

  const listDeleteHandler = (id: any) => {
    deleteFamilyDetail({ id })
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
