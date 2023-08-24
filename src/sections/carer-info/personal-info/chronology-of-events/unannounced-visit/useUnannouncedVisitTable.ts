import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteUnAnnouncedVisitListMutation,
  useUnAnnouncedVisitListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/unannounced-visit-api/unannouncedVisitApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useRef } from "react";

export const useUnannouncedVisitTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Report List
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useUnAnnouncedVisitListQuery({ search: search, ...params });
  //API for Deleting Reports
  const [deleteList] = useDeleteUnAnnouncedVisitListMutation();
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

  const unAnnouncedVisitList = data?.data?.cce_unannounced_home_visit;
  const meta = data?.meta;

  return {
    router,
    tableHeaderRefTwo,
    isLoading,
    headerChangeHandler,
    unAnnouncedVisitList,
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
