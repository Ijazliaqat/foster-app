import { useForm } from "react-hook-form";
import { FormSchema, LeisureActivityDefaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  usePostLeisureActivityMutation,
  useUpdateLeisureActivityMutation,
} from "@root/services/foster-child/education-records/leisure-activities-hobby/LeisureActivitiesHobby";
import dayjs from "dayjs";
import { useState } from "react";

export const useLeisureActivitiesForm = (
  action: any,
  LeisureAcitivityData: any,
  id: any,
  setLeisureActivityId: any
) => {
  let [isFetching, setIsFetching] = useState(false);
  let theme = useTheme();
  let router = useRouter();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues:
      action == "add" ? LeisureActivityDefaultValues : LeisureAcitivityData,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  let [postLeisureActivity, { isLoading: isLoadingPost }] =
    usePostLeisureActivityMutation();
  let [updateLeisureActivity, { isLoading: isLoadingEdit }] =
    useUpdateLeisureActivityMutation();
  const onSubmit = async (data: any) => {
    let { hobby, description, stars, date, time, media } = data;
    let formData: any = new FormData();
    formData.append("hobby", hobby);
    formData.append("description", description);
    formData.append("stars", stars);
    formData.append("date", new Date(date).toISOString());
    formData.append("time", dayjs(time).format("HH:mm:ss"));
    formData.append("media", media);

    if (action == "edit") {
      updateLeisureActivity({ formData, id: id })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Record Updated Successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action == "add") {
      postLeisureActivity({ formData, id: id })
        .unwrap()
        .then((res: any) => {
          setLeisureActivityId(res?.data?.id);
          setIsFetching(true);
          router.push(
            `/foster-child/education-records/leisure-activities-hobby/edit-leisure-activity/${res?.data?.id}?fosterChildId=${router?.query?.fosterChildId}`
          );
          enqueueSnackbar("Record Added Successfully", {
            variant: "success",
          });
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
    isFetching,
  };
};
