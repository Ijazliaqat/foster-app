import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsChildExclusionInfoTable } from ".";
import { useRouter } from "next/router";
import {
  useDeleteSingleChildExclusionInfoRecordMutation,
  useGetChildExclusionInfoListQuery,
} from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import { enqueueSnackbar } from "notistack";

const useChildExclusionInfoList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);

  const [childRecordId, setChildRecordId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const id = router?.query?.fosterChildId;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetChildExclusionInfoListQuery({ params });

  const [deleteChildRecord] = useDeleteSingleChildExclusionInfoRecordMutation();

  const deleteTrainingProfile = async () => {
    try {
      deleteChildRecord(childRecordId);
      enqueueSnackbar(`Deleted Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong!`, {
        variant: "error",
      });
    }
    setChildRecordId(null);
  };

  const openDeleteModel = (id: string) => {
    // console.log("ProfileID: ", id);
    setChildRecordId(id);
  };

  const closeDeleteProfile = (id: string) => {
    setChildRecordId(null);
  };

  const columnsChildExclusionInfoTableFuntion = columnsChildExclusionInfoTable(
    deleteTrainingProfile,
    router,
    cancelDelete,
    setCancelDelete,
    openDeleteModel
  );

  return {
    tableHeaderRef,
    childRecordId,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsChildExclusionInfoTableFuntion,
    closeDeleteProfile,
    deleteTrainingProfile,
    router,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    id,
  };
};

export default useChildExclusionInfoList;
