import { useTableParams } from "@root/hooks/useTableParams";
import { useNextofkinListQuery } from "@root/services/carer-info/other-information/nextOfKinApi";
import React from "react";

const useNextOfKinTable = () => {
  const [search, setSearch] = React.useState("");
  const { params, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isSuccess, isFetching, isError } =
    useNextofkinListQuery({ search: search, offset: params.offset });

  return {
    nextOfKinList: data?.carer_next_of_kin,
    nextOfKinListMeta: data?.meta,
    nextOfKinIsloading: isLoading,
    nextOfKinIsSuccess: isSuccess,
    nextOfKinIsFetching: isFetching,
    nextOfKinIsError: isError,
    setSearch,
    pageChangeHandler
  };
};

export default useNextOfKinTable;
