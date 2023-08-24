import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteReportByIdMutation,
  useReportListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/ooh-report-api/reportApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useRef } from "react";

export const useReportTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Report List
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useReportListQuery({ search: search, ...params });
  //API for Deleting Reports
  const [deleteList] = useDeleteReportByIdMutation();
  //DELETE API For Deleting Report List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const reportList = data?.data?.cce_ooh_report;
  const meta = data?.meta;

  return {
    router,
    tableHeaderRefTwo,
    isLoading,
    headerChangeHandler,
    reportList,
    isFetching,
    isError,
    isSuccess,
    meta,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    fosterCarerId,
  };
};
