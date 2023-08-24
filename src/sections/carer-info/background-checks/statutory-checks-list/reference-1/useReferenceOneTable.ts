import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteReferenceOneListMutation,
  useReferenceOneListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/reference-1/reference1Api";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useReferenceOneTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();

  //GET API For Reference One List
  const {
    data: referenceOneList,
    isError: referenceOneError,
    isLoading: referenceOneIsloading,
    isFetching: referenceOneIsfetching,
    isSuccess: referenceOneIsSuccess,
  }: any = useReferenceOneListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });

  //Getting API data and Meta
  const referenceOneData = referenceOneList?.data?.reference_one;
  const meta = referenceOneList?.data?.meta;

  const [deleteList] = useDeleteReferenceOneListMutation();

  //DELETE API For Reference One List
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
    referenceOneData,
    referenceOneError,
    referenceOneIsloading,
    referenceOneIsfetching,
    referenceOneIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
