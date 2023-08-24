import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsOutSchoolActivityTable } from ".";
import { useRouter } from "next/router";
import { data } from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/self-advocacy-toolkit";
import {
  useDeleteSchoolActivityDataMutation,
  useGetOutSchoolActivityListQuery,
} from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";

const useOutSchoolActivityList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const [outOfSchoolActivityId, setOutOfSchoolActivityId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetOutSchoolActivityListQuery({ fosterChildId, params });
  const [delteActivity] = useDeleteSchoolActivityDataMutation();
  

  const deleteOutOfSchoolActivityId = async () => {
    setOutOfSchoolActivityId(null);
    const res = await delteActivity(outOfSchoolActivityId);
  };

  const openDeleteModel = (id: string) => {
    setOutOfSchoolActivityId(id);
  };

  const closeDeleteProfile = (id: string) => {
    setOutOfSchoolActivityId(null);
  };

  const columnsChildExclusionInfoTableFuntion = columnsOutSchoolActivityTable(
    deleteOutOfSchoolActivityId,
    router,
    cancelDelete,
    setCancelDelete,
    openDeleteModel,
    fosterChildId
  );

  return {
    tableHeaderRef,
    outOfSchoolActivityId,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsChildExclusionInfoTableFuntion,
    closeDeleteProfile,
    deleteOutOfSchoolActivityId,
    router,
    data,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    fosterChildId,
  };
};

export default useOutSchoolActivityList;
