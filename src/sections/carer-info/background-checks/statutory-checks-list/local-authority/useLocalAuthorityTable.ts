import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteLocalAuthorityListMutation,
  useLocalAuthorityListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/local-authority/localAuthorityApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useLocalAuthorityTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Local Authority List
  const {
    data: localAuthorityList,
    isError: localAuthorityError,
    isLoading: localAuthorityIsloading,
    isFetching: localAuthorityIsfetching,
    isSuccess: localAuthorityIsSuccess,
  }: any = useLocalAuthorityListQuery({ search: search, ...params });

  //Getting API data and Meta
  const localAuthorityData = localAuthorityList?.data?.local_authority_ssd;
  const meta = localAuthorityList?.data?.meta;

  const [deleteList] = useDeleteLocalAuthorityListMutation();

  //DELETE API For Local Authority List
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
    localAuthorityData,
    localAuthorityError,
    localAuthorityIsloading,
    localAuthorityIsfetching,
    localAuthorityIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  };
};
