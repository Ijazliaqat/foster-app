import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteStudySupportInfoByIdMutation,
  useGetStudySupportInfoTableApiQuery,
} from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";
import { useRouter } from "next/router";
import { useRef } from "react";

export const useStudySupportInfoTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStudySupportInfoTableApiQuery({ params });

  const [postData] = useDeleteStudySupportInfoByIdMutation();

  const family = data?.data?.study_support_info;
  const meta = data?.meta;

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
    sortChangeHandler,
    postData,
  };
};
