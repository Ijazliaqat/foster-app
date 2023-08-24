import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDbsCheckListQuery,
  useDeleteDbsCheckListMutation,
} from "@root/services/carer-info/background-checks/statutory-check-list/dbs-checks/dbsCheckApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useDbsCheckTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For DBS Check List
  const {
    data: dbsCheckList,
    isError: dbsCheckListError,
    isLoading: dbsCheckListIsloading,
    isFetching: dbsCheckListIsfetching,
    isSuccess: dbsCheckListIsSuccess,
  }: any = useDbsCheckListQuery({ search: search, ...params });

  //Getting API data and Meta
  const dbsCheckListData = dbsCheckList?.data?.dbs_check;
  const meta = dbsCheckList?.data?.meta;

  const [deleteList] = useDeleteDbsCheckListMutation();
  //DELETE API For Check DBS List
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

  return {
    router,
    tableHeaderRefTwo,
    dbsCheckListIsloading,
    dbsCheckListData,
    dbsCheckListIsfetching,
    dbsCheckListError,
    dbsCheckListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
