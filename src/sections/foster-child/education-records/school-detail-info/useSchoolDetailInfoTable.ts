import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetSchoolDetailInfoTableApiQuery,
  useDeleteSchoolDetailInfoByIdMutation,
} from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";
import { useRouter } from "next/router";
import { useState } from "react";

export const useSchoolDetailInfoTable = () => {
  const router = useRouter();
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const { sortChangeHandler } = useTableParams();
  // ----------------------------------------------------------------------
  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };
  const { data, isLoading, isError, isFetching, isSuccess }: any =
    useGetSchoolDetailInfoTableApiQuery({
      params,
      fosterChildId: router?.query?.fosterChildId,
    });
  const [postData] = useDeleteSchoolDetailInfoByIdMutation();

  const family = data?.data?.school_info;
  const meta = data?.meta;
  const headerChangeHandler = (text: any) => {
    setSearchHandle(text.search);
  };
  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return {
    sortChangeHandler,
    router,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    postData,
  };
};
