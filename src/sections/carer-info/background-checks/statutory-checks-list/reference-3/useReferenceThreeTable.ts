import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteReferenceThreeListMutation,
  useReferenceThreeListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/reference-3/reference3Api";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useReferenceThreeTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();

  //GET API For Reference Three List
  const {
    data: referenceThreeList,
    isError: referenceThreeError,
    isLoading: referenceThreeIsloading,
    isFetching: referenceThreeIsfetching,
    isSuccess: referenceThreeIsSuccess,
  }: any = useReferenceThreeListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });

  //Getting API data and Meta
  const referenceThreeData = referenceThreeList?.data?.reference_three;
  const meta = referenceThreeList?.data?.meta;

  const [deleteList] = useDeleteReferenceThreeListMutation();

  //DELETE API For Reference Three List
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
    referenceThreeData,
    referenceThreeError,
    referenceThreeIsloading,
    referenceThreeIsfetching,
    referenceThreeIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
