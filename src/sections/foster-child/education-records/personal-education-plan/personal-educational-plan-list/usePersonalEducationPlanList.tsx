import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsPersonalEducationPlanTable } from ".";
import { useRouter } from "next/router";
import { useDeleteSingleChildEducationPlanMutation, useGetChildEducationPlanListQuery } from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";
import { enqueueSnackbar } from "notistack";

const usePersonalEducationPlanList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const [trainingProfileId, setTrainingProfileId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetChildEducationPlanListQuery({ fosterChildId, params });

    console.log(data?.data?.meta);
    

    const [deleteUser] = useDeleteSingleChildEducationPlanMutation()

  const deleteTrainingProfile = async () => {
    console.log(trainingProfileId);
    setTrainingProfileId(null);
    try {
      const res = await deleteUser(trainingProfileId);

      enqueueSnackbar(res?.data?.message ?? `Successfully Delete!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong!`, {
        variant: "error",
      });
    }
  };

  const openDeleteModel = (id: string) => {
    console.log("ProfileID: ", id);
    setTrainingProfileId(id);

  };

  const closeDeleteProfile = (id: string) => {
    setTrainingProfileId(null);
  };

  const columnsChildExclusionInfoTableFuntion =
    columnsPersonalEducationPlanTable(
      deleteTrainingProfile,
      router,
      cancelDelete,
      setCancelDelete,
      openDeleteModel
    );

  return {
    tableHeaderRef,
    trainingProfileId,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsChildExclusionInfoTableFuntion,
    closeDeleteProfile,
    deleteTrainingProfile,
    router,
    data,
    isSuccess,
    isError,
    isLoading,
    fosterChildId,
    isFetching,
  };
};

export default usePersonalEducationPlanList;
