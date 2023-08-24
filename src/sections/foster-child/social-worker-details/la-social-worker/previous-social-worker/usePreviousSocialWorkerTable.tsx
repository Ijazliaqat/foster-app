import { useTableParams } from "@root/hooks/useTableParams";
import { useGetSocialWorkerTableApiQuery } from "@root/services/foster-child/social-worker-details/la-social-worker/laSocialWorkerApi";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const usePreviousSocialWorkerTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const { sortChangeHandler } =
  useTableParams();
  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
    status: "Inactive",
  };

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetSocialWorkerTableApiQuery({
      params,
      fosterChildId: router?.query?.fosterChildId,
    });

  const family = data?.data?.social_workers;
  const meta = data?.meta;

  const headerChangeHandler = (text: any) => {
    setSearchHandle(text.search);
  };
  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler
  };
};
