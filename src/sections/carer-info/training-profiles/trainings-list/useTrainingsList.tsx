import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteTrainingProfileApiMutation,
  useGetTrainingProfileAllDataQuery,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { columnsTrainingProfilesList } from ".";

const useTrainingsList = () => {
  const [trainingProfileId, setTrainingProfileId] = useState<any>(null);
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const [deleteProfile] = useDeleteTrainingProfileApiMutation();

  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const deleteTrainingProfile = async () => {
    const res: any = deleteProfile(trainingProfileId)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Training Profile deleted  Successfully", {
          variant: "success",
        });
        setTrainingProfileId(null);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const openDeleteModel = (id: string) => {
    setTrainingProfileId(id);
  };

  const closeDeleteProfile = (id: string) => {
    setTrainingProfileId(null);
  };

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetTrainingProfileAllDataQuery({ params });

  const trainingPRofileData = data?.data?.trainingProfile;
  const meta = data?.data?.meta;

  const columnsTrainingVerificationFuntion = columnsTrainingProfilesList(
    deleteTrainingProfile,
    router,
    openDeleteModel
  );

  console.log(data, "training profile");

  return {
    columnsTrainingVerificationFuntion,
    trainingPRofileData,
    router,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    headerChangeHandler,
    tableHeaderRef,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    trainingProfileId,
    closeDeleteProfile,
    deleteTrainingProfile,
  };
};

export default useTrainingsList;
