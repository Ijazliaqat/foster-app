import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteReferenceTwoListMutation,
  useReferenceTwoListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/reference-2/reference2Api";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useReferenceTwoTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Reference Two List
  const {
    data: referenceTwoList,
    isError: referenceTwoError,
    isLoading: referenceTwoIsloading,
    isFetching: referenceTwoIsfetching,
    isSuccess: referenceTwoIsSuccess,
  }: any = useReferenceTwoListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      earch: search,
      ...params,
    },
  });

  //Getting API data and Meta
  const referenceTwoData = referenceTwoList?.data?.reference_two;
  const meta = referenceTwoList?.data?.meta;

  const [deleteList] = useDeleteReferenceTwoListMutation();

  //DELETE API For Reference Two List
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
    referenceTwoData,
    referenceTwoError,
    referenceTwoIsloading,
    referenceTwoIsfetching,
    referenceTwoIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
